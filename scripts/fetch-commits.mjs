// 빌드 전에 올해 GitHub 커밋 수를 받아 src/generated/commits.json에 적는다.
// 토큰이 없거나 요청이 실패하면 기존 파일을 그대로 둔다 (로컬 빌드, 네트워크 차단 대비).
import { readFileSync, writeFileSync } from 'node:fs'

const file = new URL('../src/generated/commits.json', import.meta.url)
const user = 'YoungHoon02'
const token = process.env.GITHUB_TOKEN
const year = new Date().getUTCFullYear()

if (!token) {
  console.log('fetch-commits: GITHUB_TOKEN 없음, 기존 값 유지')
  process.exit(0)
}

const query = `{ user(login: "${user}") { contributionsCollection(from: "${year}-01-01T00:00:00Z", to: "${year}-12-31T23:59:59Z") { totalCommitContributions } } }`

try {
  const res = await fetch('https://api.github.com/graphql', {
    method: 'POST',
    headers: { Authorization: `bearer ${token}`, 'Content-Type': 'application/json' },
    body: JSON.stringify({ query }),
  })
  const json = await res.json()
  const count = json?.data?.user?.contributionsCollection?.totalCommitContributions
  if (typeof count !== 'number') throw new Error(JSON.stringify(json.errors ?? json))
  const prev = JSON.parse(readFileSync(file, 'utf8'))
  if (prev.year === year && prev.count === count) { console.log(`fetch-commits: 변화 없음 (${count})`); process.exit(0) }
  writeFileSync(file, JSON.stringify({ year, count }, null, 2) + '\n')
  console.log(`fetch-commits: ${year}년 커밋 ${count}회`)
} catch (e) {
  console.warn('fetch-commits: 실패, 기존 값 유지:', e.message)
}

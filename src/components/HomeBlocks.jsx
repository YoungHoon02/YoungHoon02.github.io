import { FaGithub, FaGamepad, FaArrowRight } from 'react-icons/fa'
import { repos, games } from '../data.js'

const projectCount = games.reduce((n, g) => n + g.projects.length, 0)

const blocks = [
  {
    href: '#/github',
    icon: FaGithub,
    title: 'GitHub',
    meta: `저장소 ${repos.length}개`,
    description: '진행 중이거나 공개한 저장소 모음',
  },
  {
    href: '#/game',
    icon: FaGamepad,
    title: 'Game',
    meta: `게임 ${games.length}개, 프로젝트 ${projectCount}개`,
    description: '게임 관련 프로젝트와 모드',
  },
]

export default function HomeBlocks() {
  return (
    <div className="tiles">
      {blocks.map(({ href, icon: Icon, title, meta, description }) => (
        <a key={title} href={href} className="tile">
          <span className="tile-meta">
            <Icon aria-hidden />
            {meta}
          </span>
          <strong className="tile-title">{title}</strong>
          <p>{description}</p>
          <FaArrowRight className="tile-arrow" aria-hidden />
        </a>
      ))}
    </div>
  )
}

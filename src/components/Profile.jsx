import { useEffect, useRef, useState } from 'react'
import { FaGithub, FaEnvelope, FaSteam, FaDiscord } from 'react-icons/fa'
import { profile, GITHUB_USER, messages, labels } from '../data.js'
import commits from '../generated/commits.json'

export default function Profile() {
  const [copyStatus, setCopyStatus] = useState('')
  const copyTimer = useRef(null)
  const copyAttempt = useRef(0)

  useEffect(() => () => {
    clearTimeout(copyTimer.current)
    copyAttempt.current += 1
  }, [])

  const copyDiscord = async () => {
    const attempt = ++copyAttempt.current
    clearTimeout(copyTimer.current)
    setCopyStatus('')
    try {
      await navigator.clipboard.writeText(profile.discord)
      if (attempt !== copyAttempt.current) return
      setCopyStatus('success')
      copyTimer.current = setTimeout(() => setCopyStatus(''), 1500)
    } catch {
      if (attempt !== copyAttempt.current) return
      setCopyStatus('error')
    }
  }

  const stat = labels.commits(commits.year, commits.count)

  return (
    <article className="rp cut" data-stagger>
      <div className="rp-head">
        <div className="rp-avatar">
          <img src={`https://github.com/${GITHUB_USER}.png`} alt={profile.name} />
        </div>
        <div>
          <h1 className="display">{profile.name}</h1>
          <p className="role">{profile.role}</p>
        </div>
      </div>
      <div className="rp-stat">
        <span className="lab">{labels.github}</span>
        <p>{stat.text[0]}<b>{stat.count}</b>{stat.text[1]}</p>
      </div>
      <p className="intro">{profile.intro}</p>
      <div className="links">
        <a href={`https://github.com/${GITHUB_USER}`} target="_blank" rel="noreferrer" aria-label="GitHub" data-tip="GitHub">
          <FaGithub />
        </a>
        <a href={`mailto:${profile.email}`} aria-label="Email" data-tip={profile.email}>
          <FaEnvelope />
        </a>
        <a href={profile.steam} target="_blank" rel="noreferrer" aria-label="Steam" data-tip="Steam">
          <FaSteam />
        </a>
        <button
          type="button"
          onClick={copyDiscord}
          aria-label="Discord"
          data-tip={copyStatus === 'success' ? messages.discordCopied : `Discord (${messages.discordCopyHint})`}
        >
          <FaDiscord />
        </button>
      </div>
      <p className="copy-status muted" role="status" aria-live="polite" aria-atomic="true">
        {copyStatus === 'success' && messages.discordCopied}
        {copyStatus === 'error' && <>{messages.discordCopyFailed} <span>{profile.discord}</span></>}
      </p>
    </article>
  )
}

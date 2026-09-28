import { useState } from 'react'
import { FaGithub, FaEnvelope, FaSteam, FaDiscord } from 'react-icons/fa'
import { profile, GITHUB_USER } from '../data.js'

export default function Profile() {
  const [copied, setCopied] = useState(false)

  const copyDiscord = () => {
    navigator.clipboard.writeText(profile.discord).then(() => {
      setCopied(true)
      setTimeout(() => setCopied(false), 1500)
    })
  }

  return (
    <section className="section">
      <div className="profile">
        <img className="avatar" src={`https://github.com/${GITHUB_USER}.png`} alt={profile.name} />
        <div>
          <h1>{profile.name}</h1>
          <p className="role">{profile.role}</p>
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
              data-tip={copied ? '복사됨 ✓' : `@${profile.discord} (클릭하여 복사)`}
            >
              <FaDiscord />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

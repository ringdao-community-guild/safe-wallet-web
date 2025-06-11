import type { ReactElement } from 'react'
import { SvgIcon, Typography } from '@mui/material'
import GitHubIcon from '@mui/icons-material/GitHub'
import { useRouter } from 'next/router'
import css from './styles.module.css'
import { AppRoutes } from '@/config/routes'
import packageJson from '../../../../package.json'
import ExternalLink from '../ExternalLink'

const footerPages = [
  AppRoutes.welcome.index,
  AppRoutes.settings.index,
  AppRoutes.imprint,
  AppRoutes.privacy,
  AppRoutes.cookie,
  AppRoutes.terms,
  AppRoutes.licenses,
]

const Footer = (): ReactElement | null => {
  const router = useRouter()

  if (!footerPages.some((path) => router.pathname.startsWith(path))) {
    return null
  }

  return (
    <footer className={css.container}>
      <ul>
        <li>
          <Typography variant="caption">&copy;2022–{new Date().getFullYear()}</Typography>
        </li>
        <li>
          <ExternalLink
            href="https://github.com/ringdao-community-guild"
            noIcon
            sx={{ span: { textDecoration: 'underline' } }}
          >
            Ringdao Community Guild
          </ExternalLink>
        </li>
        <li>
          <ExternalLink href="https://darwinia.network" noIcon sx={{ span: { textDecoration: 'underline' } }}>
            Darwinia Network
          </ExternalLink>
        </li>
        <li>
          <ExternalLink href="https://docs.darwinia.network" noIcon sx={{ span: { textDecoration: 'underline' } }}>
            Darwinia Docs
          </ExternalLink>
        </li>
        <li>
          <ExternalLink href={`${packageJson.homepage}/releases/tag/v${packageJson.version}`} noIcon>
            <SvgIcon component={GitHubIcon} inheritViewBox fontSize="inherit" sx={{ mr: 0.5 }} /> v{packageJson.version}
          </ExternalLink>
        </li>
      </ul>
    </footer>
  )
}

export default Footer

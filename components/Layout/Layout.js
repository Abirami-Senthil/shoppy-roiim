import React from 'react'
import PropTypes from 'prop-types'
import { Header, Footer } from '..'
import { ThemeProvider } from '@material-ui/core/styles'
import { Container } from '@material-ui/core'
import { theme } from '../../util/common'

export default function Layout({ children, title }) {
  return (
    <ThemeProvider theme={theme}>
      <div>
        <Header title={title} />
        <Container maxWidth="sm">
          <div>{children}</div>
        </Container>
        <Footer />
      </div>
    </ThemeProvider>
  )
}
Layout.propTypes = {
  title: PropTypes.string,
  children: PropTypes.element
}
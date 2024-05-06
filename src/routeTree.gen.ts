/* prettier-ignore-start */

/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file is auto-generated by TanStack Router

// Import Routes

import { Route as rootRoute } from './routes/__root'
import { Route as ContactImport } from './routes/contact'
import { Route as CartImport } from './routes/cart'
import { Route as BooksImport } from './routes/books'
import { Route as AboutImport } from './routes/about'
import { Route as IndexImport } from './routes/index'
import { Route as AuthLoginImport } from './routes/auth.login'

// Create/Update Routes

const ContactRoute = ContactImport.update({
  path: '/contact',
  getParentRoute: () => rootRoute,
} as any)

const CartRoute = CartImport.update({
  path: '/cart',
  getParentRoute: () => rootRoute,
} as any)

const BooksRoute = BooksImport.update({
  path: '/books',
  getParentRoute: () => rootRoute,
} as any)

const AboutRoute = AboutImport.update({
  path: '/about',
  getParentRoute: () => rootRoute,
} as any)

const IndexRoute = IndexImport.update({
  path: '/',
  getParentRoute: () => rootRoute,
} as any)

const AuthLoginRoute = AuthLoginImport.update({
  path: '/auth/login',
  getParentRoute: () => rootRoute,
} as any)

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/': {
      preLoaderRoute: typeof IndexImport
      parentRoute: typeof rootRoute
    }
    '/about': {
      preLoaderRoute: typeof AboutImport
      parentRoute: typeof rootRoute
    }
    '/books': {
      preLoaderRoute: typeof BooksImport
      parentRoute: typeof rootRoute
    }
    '/cart': {
      preLoaderRoute: typeof CartImport
      parentRoute: typeof rootRoute
    }
    '/contact': {
      preLoaderRoute: typeof ContactImport
      parentRoute: typeof rootRoute
    }
    '/auth/login': {
      preLoaderRoute: typeof AuthLoginImport
      parentRoute: typeof rootRoute
    }
  }
}

// Create and export the route tree

export const routeTree = rootRoute.addChildren([
  IndexRoute,
  AboutRoute,
  BooksRoute,
  CartRoute,
  ContactRoute,
  AuthLoginRoute,
])

/* prettier-ignore-end */

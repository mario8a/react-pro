import { LazyExoticComponent } from 'react';
import { lazy } from 'react';
import { NoLazy } from '../01-lazyload/pages/NoLazy';

type JSXComponent =() => JSX.Element;

interface Route {
  to: string;
  path: string;
  Component: LazyExoticComponent<JSXComponent> | JSXComponent;
  name: string;
}

const LazyLayout = lazy(() => import(/* webpackChunkName: "lazyLayout" */'../01-lazyload/layout/LazyLayout'));


export const routes: Route[] = [
  {
      path: '/lazyload/*',
      to: '/lazyload/',
      Component: LazyLayout,
      name: 'LazyLayout - dash'
  },
  {
      to: '/no-lazy',
      path: 'no-lazy',
      Component: NoLazy,
      name: 'No lazy'
  }
]
// @ts-nocheck

import { createRef, RefObject } from 'react'
import { NavigationContainerRef } from '@react-navigation/native'
import { NavigationState } from '@react-navigation/routers'

export const getActiveRouteName = (state: NavigationState | undefined) => {
  if (state) {
    const route = state.routes[state.index]
    if (route.state) {
      // Dive into nested navigators
      return getActiveRouteName(route.state)
    }
    return route.name
  }
}

export const screenTracking = (state: NavigationState | undefined) => {
  const currentRouteName = getActiveRouteName(state)
  console.log(`=== NAVIGATING to ---> ${currentRouteName}`)
}

export const navigationRef: RefObject<NavigationContainerRef> = createRef()

export const isReadyRef: RefObject<any> = createRef()

export const navigateEvent = (name: any, params?: any) => {
  if (isReadyRef.current && navigationRef.current) {
    navigationRef.current.navigate(name, params)
  }
}

export const navigate = (routeName: string, params: object | undefined) => {
  navigationRef.current?.navigate(routeName, params)
}

export const navigateEventStack = (
  stack: string,
  name: string,
  params?: any
) => {
  navigateEvent(stack)

  setTimeout(() => {
    navigateEvent(name, {
      ...params
    })
  }, 0)
}

export const getCurrentRouteName = () => {
  if (isReadyRef.current && navigationRef.current) {
    return navigationRef.current?.getCurrentRoute()?.name
  }
}

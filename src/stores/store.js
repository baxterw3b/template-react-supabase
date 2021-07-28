import create from 'zustand'
import { produce } from 'immer'

const immer = config => (set, get, api) => config(fn => set(produce(fn)), get, api)

const store = set => ({
  session: null,
  setSession: session => set(_ => ({ session })),
  title: 'Supabase Auth Template',
  description: 'Template which use React, Supabase, Immer, Zustand'
})

export const [useStore] = create(immer(store))


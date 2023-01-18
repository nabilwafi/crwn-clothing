import { AnyAction } from 'redux'

type Matchable<AC extends () => AnyAction> = AC & {
  type: ReturnType<AC>['type']
  match(action: AnyAction): action is ReturnType<AC>
}

export function withMatch<AC extends () => AnyAction & { type: string }>(
  ActionCreator: AC
): Matchable<AC>

export function withMatch<
  AC extends (...args: any[]) => AnyAction & { type: string }
>(ActionCreator: AC): Matchable<AC>

export function withMatch(ActionCreator: Function) {
  const type = ActionCreator().type

  return Object.assign(ActionCreator, {
    type,
    match(action: AnyAction) {
      return action.type === type
    },
  })
}

export type ActionWithPayload<T, P> = {
  type: T
  payload: P
}

export type Action<T> = {
  type: T
}

export function createAction<T extends string, P>(
  type: T,
  payload: P
): ActionWithPayload<T, P>

export function createAction<T extends string>(
  type: T,
  payload: void
): Action<T>

export function createAction<T extends string, P>(type: T, payload: P) {
  return { type, payload }
}

import { SVGAttributes } from "react"

import { classMerge, classWithModifiers } from "@/utils/bem"


export type IconName =
  | "eye"
  | "eye-crossed"
  | "cross"
  | "cross-circle"
  | "gear"
  | "exit"
  | "trash-bin"
  | "square-plus"
  | "pen"
  | "check"
  | "checked"
  | "magic-wand"
  | "logo"
  | "monitor"
  | "arrow-up"
  | "chevron-down"
  | "list-add"
  // | "asd"
  // eslint-disable-next-line @typescript-eslint/ban-types
  | (string & {})

interface IconProps extends SVGAttributes<SVGElement> {
  name?: IconName
  modifiers?: Array<string | number | false | null | undefined>
}

/**
 *
 * @prop `modifiers` only work when className given.
 * @prop `className` is a root class, which is modified by `name`,
 * that will be modified by `modifiers` including `name` modifications.
 *
 * Example: `"icon mentor-search__icon mentor-search__icon--chevron mentor-search__icon mentor-search__icon--chevron--up"`
 *
 */

function Icon(props: IconProps) {
  if (props.href) {
    return (
      <img src={props.href} className={classMerge("icon", props.className && classWithModifiers(props.className, ...props.modifiers || []))} />
    )
  }

  return (
    <svg {...props} className={classMerge("icon", props.className && classWithModifiers(classWithModifiers(props.className, props.name), ...props.modifiers || []))}>
      <use href={`/static/icons.svg#${props.name}`} />
    </svg>
  )
}


export default Icon

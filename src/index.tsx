export type ButtonProps = {
  /**
   * 是否禁用
   */
  disabled?: boolean;
  /**
   * Type of Button
   * @default 'default'
   */
  size?: 'mini' | 'small' | 'default' | 'large';
};
export default function Button (props?: ButtonProps)  {
  return <span>组件测试</span>;
};
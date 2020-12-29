type IconProps = { height: number; width: number; fill: string };

export const HomeIcon = ({ height, width, fill }: IconProps) => (
  <svg width={width} height={height} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M12.514 3.47698C12.153 3.19639 11.6477 3.19639 11.2866 3.47698L4.13632 9.03458C3.89258 9.22403 3.75 9.51543 3.75 9.82413V20C3.75 20.5523 4.19772 21 4.75 21H8.35744C8.90972 21 9.35744 20.5523 9.35744 20V14.9581C9.35744 14.4058 9.80515 13.9581 10.3574 13.9581H13.4432C13.9955 13.9581 14.4432 14.4058 14.4432 14.9581V20C14.4432 20.5523 14.891 21 15.4432 21H19.0507C19.603 21 20.0507 20.5523 20.0507 20V9.82413C20.0507 9.51543 19.9081 9.22403 19.6643 9.03458L12.514 3.47698Z"
      fill={fill}
    />
  </svg>
);

export const BarIcon = ({ height, width, fill }: IconProps) => (
  <svg width={width} height={height} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M8.25 4.5C8.25 3.67157 8.92157 3 9.75 3C10.5784 3 11.25 3.67157 11.25 4.5V19.5C11.25 20.3284 10.5784 21 9.75 21C8.92157 21 8.25 20.3284 8.25 19.5V4.5Z"
      fill={fill}
    />
    <path
      d="M3.75 17.25C3.75 16.4216 4.42157 15.75 5.25 15.75C6.07843 15.75 6.75 16.4216 6.75 17.25V19.5C6.75 20.3284 6.07843 21 5.25 21C4.42157 21 3.75 20.3284 3.75 19.5V17.25Z"
      fill={fill}
    />
    <path
      d="M12.75 14.25C12.75 13.4216 13.4216 12.75 14.25 12.75C15.0784 12.75 15.75 13.4216 15.75 14.25V19.5C15.75 20.3284 15.0784 21 14.25 21C13.4216 21 12.75 20.3284 12.75 19.5V14.25Z"
      fill={fill}
    />
    <path
      d="M17.25 9.75C17.25 8.92157 17.9216 8.25 18.75 8.25C19.5784 8.25 20.25 8.92157 20.25 9.75V19.5C20.25 20.3284 19.5784 21 18.75 21C17.9216 21 17.25 20.3284 17.25 19.5V9.75Z"
      fill={fill}
    />
  </svg>
);

export const CardIcon = ({ height, width, fill }: IconProps) => (
  <svg width={width} height={height} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M22.5 6C22.5 5.175 21.825 4.5 21 4.5H3C2.175 4.5 1.5 5.175 1.5 6V8.25H22.5V6Z" fill={fill} />
    <path
      d="M1.5 18C1.5 18.825 2.175 19.5 3 19.5H21C21.825 19.5 22.5 18.825 22.5 18V10.5H1.5V18ZM8.15625 15.75H15.8438C16.2047 15.75 16.5 16.0453 16.5 16.4062C16.5 16.7672 16.2047 17.0625 15.8438 17.0625H8.15625C7.79531 17.0625 7.5 16.7672 7.5 16.4062C7.5 16.0453 7.79531 15.75 8.15625 15.75ZM4.78125 15.75H5.34375C5.70469 15.75 6 16.0453 6 16.4062C6 16.7672 5.70469 17.0625 5.34375 17.0625H4.78125C4.42031 17.0625 4.125 16.7672 4.125 16.4062C4.125 16.0453 4.42031 15.75 4.78125 15.75Z"
      fill={fill}
    />
  </svg>
);

export const PersonIcon = ({ height, width, fill }: IconProps) => (
  <svg width={width} height={height} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M12 12C14.4752 12 16.5 9.97495 16.5 7.5C16.5 5.02505 14.4752 3 12 3C9.52477 3 7.5 5.02505 7.5 7.5C7.5 9.97495 9.52477 12 12 12ZM12 14.25C9.01884 14.25 3 15.7688 3 18.75V19C3 20.1046 3.89543 21 5 21H19C20.1046 21 21 20.1046 21 19V18.75C21 15.7688 14.9812 14.25 12 14.25Z"
      fill={fill}
    />
  </svg>
);

import React from 'react';
import '../../styles/Checkbox.scss';
// import { ReactComponent as ENABLED } from '../../assets/icons/ENABLED.svg';
// import { ReactComponent as DISABLED } from '../../assets/icons/DISABLED.svg';

function Checkbox() {
  return (
    <div className="wrapper">
      <div className="input_wrapper">
        <input type="checkbox" />
        {/* <ENABLED />
        <DISABLED /> */}
        <svg className="is_checked" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52 9">
          <path d="M0.761719 9V0.46875H3.38672C4.13672 0.46875 4.80664 0.638672 5.39648 0.978516C5.99023 1.31445 6.45312 1.79492 6.78516 2.41992C7.11719 3.04102 7.2832 3.74805 7.2832 4.54102V4.93359C7.2832 5.72656 7.11914 6.43164 6.79102 7.04883C6.4668 7.66602 6.00781 8.14453 5.41406 8.48438C4.82031 8.82422 4.15039 8.99609 3.4043 9H0.761719ZM2.51953 1.89258V7.58789H3.36914C4.05664 7.58789 4.58203 7.36328 4.94531 6.91406C5.30859 6.46484 5.49414 5.82227 5.50195 4.98633V4.53516C5.50195 3.66797 5.32227 3.01172 4.96289 2.56641C4.60352 2.11719 4.07812 1.89258 3.38672 1.89258H2.51953ZM10.4355 9H8.67773V0.46875H10.4355V9ZM16.4941 6.76172C16.4941 6.42969 16.377 6.17578 16.1426 6C15.9082 5.82031 15.4863 5.63281 14.877 5.4375C14.2676 5.23828 13.7852 5.04297 13.4297 4.85156C12.4609 4.32812 11.9766 3.62305 11.9766 2.73633C11.9766 2.27539 12.1055 1.86523 12.3633 1.50586C12.625 1.14258 12.998 0.859375 13.4824 0.65625C13.9707 0.453125 14.5176 0.351562 15.123 0.351562C15.7324 0.351562 16.2754 0.462891 16.752 0.685547C17.2285 0.904297 17.5977 1.21484 17.8594 1.61719C18.125 2.01953 18.2578 2.47656 18.2578 2.98828H16.5C16.5 2.59766 16.377 2.29492 16.1309 2.08008C15.8848 1.86133 15.5391 1.75195 15.0938 1.75195C14.6641 1.75195 14.3301 1.84375 14.0918 2.02734C13.8535 2.20703 13.7344 2.44531 13.7344 2.74219C13.7344 3.01953 13.873 3.25195 14.1504 3.43945C14.4316 3.62695 14.8438 3.80273 15.3867 3.9668C16.3867 4.26758 17.1152 4.64062 17.5723 5.08594C18.0293 5.53125 18.2578 6.08594 18.2578 6.75C18.2578 7.48828 17.9785 8.06836 17.4199 8.49023C16.8613 8.9082 16.1094 9.11719 15.1641 9.11719C14.5078 9.11719 13.9102 8.99805 13.3711 8.75977C12.832 8.51758 12.4199 8.1875 12.1348 7.76953C11.8535 7.35156 11.7129 6.86719 11.7129 6.31641H13.4766C13.4766 7.25781 14.0391 7.72852 15.1641 7.72852C15.582 7.72852 15.9082 7.64453 16.1426 7.47656C16.377 7.30469 16.4941 7.06641 16.4941 6.76172ZM24.2695 7.24219H21.1875L20.6016 9H18.7324L21.9082 0.46875H23.5371L26.7305 9H24.8613L24.2695 7.24219ZM21.6621 5.81836H23.7949L22.7227 2.625L21.6621 5.81836ZM27.5273 9V0.46875H30.5156C31.5508 0.46875 32.3359 0.667969 32.8711 1.06641C33.4062 1.46094 33.6738 2.04102 33.6738 2.80664C33.6738 3.22461 33.5664 3.59375 33.3516 3.91406C33.1367 4.23047 32.8379 4.46289 32.4551 4.61133C32.8926 4.7207 33.2363 4.94141 33.4863 5.27344C33.7402 5.60547 33.8672 6.01172 33.8672 6.49219C33.8672 7.3125 33.6055 7.93359 33.082 8.35547C32.5586 8.77734 31.8125 8.99219 30.8438 9H27.5273ZM29.2852 5.28516V7.58789H30.791C31.2051 7.58789 31.5273 7.49023 31.7578 7.29492C31.9922 7.0957 32.1094 6.82227 32.1094 6.47461C32.1094 5.69336 31.7051 5.29688 30.8965 5.28516H29.2852ZM29.2852 4.04297H30.5859C31.4727 4.02734 31.916 3.67383 31.916 2.98242C31.916 2.5957 31.8027 2.31836 31.5762 2.15039C31.3535 1.97852 31 1.89258 30.5156 1.89258H29.2852V4.04297ZM36.9492 7.58789H40.6816V9H35.1914V0.46875H36.9492V7.58789ZM46.8281 5.30273H43.4531V7.58789H47.4141V9H41.6953V0.46875H47.4023V1.89258H43.4531V3.92578H46.8281V5.30273ZM48.4453 9V0.46875H51.0703C51.8203 0.46875 52.4902 0.638672 53.0801 0.978516C53.6738 1.31445 54.1367 1.79492 54.4688 2.41992C54.8008 3.04102 54.9668 3.74805 54.9668 4.54102V4.93359C54.9668 5.72656 54.8027 6.43164 54.4746 7.04883C54.1504 7.66602 53.6914 8.14453 53.0977 8.48438C52.5039 8.82422 51.834 8.99609 51.0879 9H48.4453ZM50.2031 1.89258V7.58789H51.0527C51.7402 7.58789 52.2656 7.36328 52.6289 6.91406C52.9922 6.46484 53.1777 5.82227 53.1855 4.98633V4.53516C53.1855 3.66797 53.0059 3.01172 52.6465 2.56641C52.2871 2.11719 51.7617 1.89258 51.0703 1.89258H50.2031Z" fill="black" />
        </svg>
        <svg className="is_unchecked" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 55 10">
          <path d="M0.761719 9V0.46875H3.38672C4.13672 0.46875 4.80664 0.638672 5.39648 0.978516C5.99023 1.31445 6.45312 1.79492 6.78516 2.41992C7.11719 3.04102 7.2832 3.74805 7.2832 4.54102V4.93359C7.2832 5.72656 7.11914 6.43164 6.79102 7.04883C6.4668 7.66602 6.00781 8.14453 5.41406 8.48438C4.82031 8.82422 4.15039 8.99609 3.4043 9H0.761719ZM2.51953 1.89258V7.58789H3.36914C4.05664 7.58789 4.58203 7.36328 4.94531 6.91406C5.30859 6.46484 5.49414 5.82227 5.50195 4.98633V4.53516C5.50195 3.66797 5.32227 3.01172 4.96289 2.56641C4.60352 2.11719 4.07812 1.89258 3.38672 1.89258H2.51953ZM10.4355 9H8.67773V0.46875H10.4355V9ZM16.4941 6.76172C16.4941 6.42969 16.377 6.17578 16.1426 6C15.9082 5.82031 15.4863 5.63281 14.877 5.4375C14.2676 5.23828 13.7852 5.04297 13.4297 4.85156C12.4609 4.32812 11.9766 3.62305 11.9766 2.73633C11.9766 2.27539 12.1055 1.86523 12.3633 1.50586C12.625 1.14258 12.998 0.859375 13.4824 0.65625C13.9707 0.453125 14.5176 0.351562 15.123 0.351562C15.7324 0.351562 16.2754 0.462891 16.752 0.685547C17.2285 0.904297 17.5977 1.21484 17.8594 1.61719C18.125 2.01953 18.2578 2.47656 18.2578 2.98828H16.5C16.5 2.59766 16.377 2.29492 16.1309 2.08008C15.8848 1.86133 15.5391 1.75195 15.0938 1.75195C14.6641 1.75195 14.3301 1.84375 14.0918 2.02734C13.8535 2.20703 13.7344 2.44531 13.7344 2.74219C13.7344 3.01953 13.873 3.25195 14.1504 3.43945C14.4316 3.62695 14.8438 3.80273 15.3867 3.9668C16.3867 4.26758 17.1152 4.64062 17.5723 5.08594C18.0293 5.53125 18.2578 6.08594 18.2578 6.75C18.2578 7.48828 17.9785 8.06836 17.4199 8.49023C16.8613 8.9082 16.1094 9.11719 15.1641 9.11719C14.5078 9.11719 13.9102 8.99805 13.3711 8.75977C12.832 8.51758 12.4199 8.1875 12.1348 7.76953C11.8535 7.35156 11.7129 6.86719 11.7129 6.31641H13.4766C13.4766 7.25781 14.0391 7.72852 15.1641 7.72852C15.582 7.72852 15.9082 7.64453 16.1426 7.47656C16.377 7.30469 16.4941 7.06641 16.4941 6.76172ZM24.2695 7.24219H21.1875L20.6016 9H18.7324L21.9082 0.46875H23.5371L26.7305 9H24.8613L24.2695 7.24219ZM21.6621 5.81836H23.7949L22.7227 2.625L21.6621 5.81836ZM27.5273 9V0.46875H30.5156C31.5508 0.46875 32.3359 0.667969 32.8711 1.06641C33.4062 1.46094 33.6738 2.04102 33.6738 2.80664C33.6738 3.22461 33.5664 3.59375 33.3516 3.91406C33.1367 4.23047 32.8379 4.46289 32.4551 4.61133C32.8926 4.7207 33.2363 4.94141 33.4863 5.27344C33.7402 5.60547 33.8672 6.01172 33.8672 6.49219C33.8672 7.3125 33.6055 7.93359 33.082 8.35547C32.5586 8.77734 31.8125 8.99219 30.8438 9H27.5273ZM29.2852 5.28516V7.58789H30.791C31.2051 7.58789 31.5273 7.49023 31.7578 7.29492C31.9922 7.0957 32.1094 6.82227 32.1094 6.47461C32.1094 5.69336 31.7051 5.29688 30.8965 5.28516H29.2852ZM29.2852 4.04297H30.5859C31.4727 4.02734 31.916 3.67383 31.916 2.98242C31.916 2.5957 31.8027 2.31836 31.5762 2.15039C31.3535 1.97852 31 1.89258 30.5156 1.89258H29.2852V4.04297ZM36.9492 7.58789H40.6816V9H35.1914V0.46875H36.9492V7.58789ZM46.8281 5.30273H43.4531V7.58789H47.4141V9H41.6953V0.46875H47.4023V1.89258H43.4531V3.92578H46.8281V5.30273ZM48.4453 9V0.46875H51.0703C51.8203 0.46875 52.4902 0.638672 53.0801 0.978516C53.6738 1.31445 54.1367 1.79492 54.4688 2.41992C54.8008 3.04102 54.9668 3.74805 54.9668 4.54102V4.93359C54.9668 5.72656 54.8027 6.43164 54.4746 7.04883C54.1504 7.66602 53.6914 8.14453 53.0977 8.48438C52.5039 8.82422 51.834 8.99609 51.0879 9H48.4453ZM50.2031 1.89258V7.58789H51.0527C51.7402 7.58789 52.2656 7.36328 52.6289 6.91406C52.9922 6.46484 53.1777 5.82227 53.1855 4.98633V4.53516C53.1855 3.66797 53.0059 3.01172 52.6465 2.56641C52.2871 2.11719 51.7617 1.89258 51.0703 1.89258H50.2031Z" fill="black" />
        </svg>
      </div>
    </div>
  );
}

export default Checkbox;

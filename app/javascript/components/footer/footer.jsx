import React from 'react';
import './style.less';

const Footer = () => {
  return (
    <>
      <div className="footer__wrapper"></div>
      <div className="footer">
        <a className="footer__item">
          <svg width="30" height="28" viewBox="0 0 30 28"  xmlns="http://www.w3.org/2000/svg">
            <path d="M13.3058 3.37698C14.0547 1.94891 16.0991 1.94891 16.8481 3.37698L19.2276 7.91373C19.5161 8.46383 20.0438 8.84864 20.6558 8.95516L25.6993 9.833C27.28 10.1081 27.9095 12.0391 26.7946 13.193L23.2132 16.8999C22.7842 17.344 22.5843 17.9614 22.6717 18.5726L23.4015 23.6773C23.6292 25.2706 21.9775 26.4666 20.5349 25.753L15.9636 23.4919C15.4048 23.2155 14.749 23.2155 14.1902 23.4919L9.61897 25.753C8.1763 26.4666 6.5246 25.2706 6.75238 23.6773L7.48214 18.5726C7.56952 17.9614 7.36966 17.344 6.94061 16.8999L3.3592 13.193C2.24434 12.0391 2.87385 10.1081 4.4546 9.833L9.49807 8.95516C10.11 8.84864 10.6378 8.46383 10.9263 7.91373L13.3058 3.37698Z" />
          </svg>
          <div className="footer__item__title">Leaderboard</div>
        </a>
        <a className="footer__item">
          <svg width="30" height="28" viewBox="0 0 30 28" xmlns="http://www.w3.org/2000/svg">
            <path d="M14.5765 27.6296L15 28L15.4235 27.6296C24.5294 19.8519 27 17.1111 27 12.6667C27 8.96296 24.1765 6 20.6471 6C17.7529 6 16.1294 7.7037 15 9.03704C13.8706 7.7037 12.2471 6 9.35294 6C5.82353 6 3 8.96296 3 12.6667C3 17.1111 5.47059 19.8519 14.5765 27.6296Z"/>
          </svg>
          <div className="footer__item__title">Spinner</div>
        </a>

        <a className="footer__button">
          <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g filter="url(#filter0_d)">
            <circle cx="40" cy="36" r="35.5" fill="white" stroke="#47D580"/>
            <path d="M70.5 36C70.5 52.8447 56.8447 66.5 40 66.5C23.1553 66.5 9.5 52.8447 9.5 36C9.5 19.1553 23.1553 5.5 40 5.5C56.8447 5.5 70.5 19.1553 70.5 36Z" fill="#47D580" stroke="#47D580"/>
            </g>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M40 16C40.5894 16 41.1546 16.2341 41.5714 16.6509C41.9881 17.0676 42.2222 17.6329 42.2222 18.2222V36C42.2222 36.5894 41.9881 37.1546 41.5714 37.5713C41.1546 37.9881 40.5894 38.2222 40 38.2222H22.2222C21.6329 38.2222 21.0676 37.9881 20.6509 37.5713C20.2341 37.1546 20 36.5894 20 36C20 35.4106 20.2341 34.8454 20.6509 34.4287C21.0676 34.0119 21.6329 33.7778 22.2222 33.7778H37.7778V18.2222C37.7778 17.6329 38.0119 17.0676 38.4287 16.6509C38.8454 16.2341 39.4106 16 40 16Z" fill="white"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M37.7778 36.0001C37.7778 35.4107 38.012 34.8455 38.4287 34.4287C38.8455 34.012 39.4107 33.7778 40.0001 33.7778H57.7778C58.3672 33.7778 58.9324 34.012 59.3492 34.4287C59.7659 34.8455 60.0001 35.4107 60.0001 36.0001C60.0001 36.5894 59.7659 37.1547 59.3492 37.5714C58.9324 37.9882 58.3672 38.2223 57.7778 38.2223H42.2223V53.7778C42.2223 54.3672 41.9882 54.9324 41.5714 55.3492C41.1547 55.7659 40.5894 56.0001 40.0001 56.0001C39.4107 56.0001 38.8455 55.7659 38.4287 55.3492C38.012 54.9324 37.7778 54.3672 37.7778 53.7778V36.0001Z" fill="white"/>
            <defs>
            <filter id="filter0_d" x="0" y="0" width="80" height="80" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
            <feFlood flood-opacity="0" result="BackgroundImageFix"/>
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/>
            <feOffset dy="4"/>
            <feGaussianBlur stdDeviation="2"/>
            <feColorMatrix type="matrix" values="0 0 0 0 0.0802604 0 0 0 0 0.279167 0 0 0 0 0.159823 0 0 0 0.3 0"/>
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"/>
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape"/>
            </filter>
            </defs>
          </svg>
        </a>

        <a className="footer__item">
          <svg width="30" height="28" viewBox="0 0 30 28" xmlns="http://www.w3.org/2000/svg">
              <circle cx="7" cy="21" r="3"/>
              <circle cx="15" cy="21" r="3"/>
              <circle cx="23" cy="21" r="3"/>
              <circle cx="23" cy="13" r="3"/>
              <circle cx="15" cy="13" r="3"/>
              <circle cx="23" cy="5" r="3"/>
            </svg>
          <div className="footer__item__title">Levels</div>
        </a>
        <a className="footer__item">
          <svg width="30" height="28" viewBox="0 0 30 28" xmlns="http://www.w3.org/2000/svg">
            <path d="M14.8602 13.5609C16.4485 13.5609 17.8238 12.9912 18.9475 11.8673C20.0712 10.7436 20.6409 9.36868 20.6409 7.78025C20.6409 6.19237 20.0712 4.81725 18.9473 3.69317C17.8234 2.56964 16.4483 2 14.8602 2C13.2718 2 11.8969 2.56964 10.7731 3.69335C9.64941 4.81707 9.07959 6.19218 9.07959 7.78025C9.07959 9.36868 9.64941 10.7438 10.7733 11.8675C11.8972 12.991 13.2723 13.5609 14.8602 13.5609Z"/>
            <path d="M24.9748 20.4546C24.9424 19.987 24.8768 19.4768 24.7803 18.9381C24.6829 18.3954 24.5575 17.8824 24.4073 17.4134C24.2523 16.9288 24.0413 16.4501 23.7806 15.9914C23.5099 15.5154 23.1921 15.1008 22.8354 14.7597C22.4624 14.4028 22.0057 14.1159 21.4777 13.9066C20.9514 13.6984 20.3682 13.593 19.7444 13.593C19.4994 13.593 19.2625 13.6935 18.8049 13.9914C18.5233 14.175 18.1938 14.3874 17.8262 14.6224C17.5118 14.8227 17.0859 15.0104 16.5598 15.1803C16.0466 15.3464 15.5255 15.4306 15.0111 15.4306C14.4968 15.4306 13.9758 15.3464 13.462 15.1803C12.9365 15.0106 12.5106 14.8229 12.1966 14.6226C11.8324 14.3898 11.5028 14.1774 11.217 13.9912C10.7599 13.6933 10.5228 13.5928 10.2778 13.5928C9.65381 13.5928 9.0708 13.6984 8.54474 13.9068C8.01703 14.1157 7.56018 14.4026 7.18683 14.7599C6.83032 15.1012 6.51227 15.5156 6.242 15.9914C5.98145 16.4501 5.77051 16.9286 5.61523 17.4136C5.46527 17.8826 5.33984 18.3954 5.24243 18.9381C5.14594 19.4761 5.08038 19.9864 5.04797 20.4552C5.01611 20.9144 5 21.391 5 21.8724C5 23.1252 5.39825 24.1394 6.18359 24.8874C6.95923 25.6255 7.98553 25.9999 9.23358 25.9999H20.7897C22.0378 25.9999 23.0637 25.6257 23.8395 24.8874C24.6251 24.14 25.0233 23.1256 25.0233 21.8722C25.0231 21.3886 25.0068 20.9117 24.9748 20.4546Z"/>
          </svg>
          <div className="footer__item__title">Profile</div>
        </a>
      </div>
    </>
  );
}

export default Footer;

import { downscale, screenWidth } from "../tools";

export default function Jokes() {
  const BLACK = "#2A2A2A";
  const X = 94, Y = 120;

  if (screenWidth < 768) return (
    <svg width={downscale(X)} height={downscale(Y)} viewBox={`0 0 ${X} ${Y}`} fill="none" xmlns="http://www.w3.org/2000/svg" className="vector">
      <path d="M47 120C34 120 22.9722 115.472 13.9167 106.417C4.86111 97.3611 0.333328 86.3333 0.333328 73.3333C0.333328 64.7778 1.74999 56.1667 4.58333 47.5C7.41666 38.8333 11.0833 30.9722 15.5833 23.9167C20.0833 16.8611 25.1111 11.1111 30.6667 6.66667C36.2222 2.22222 41.6667 0 47 0C52.4444 0 57.9167 2.22222 63.4167 6.66667C68.9167 11.1111 73.9167 16.8611 78.4167 23.9167C82.9167 30.9722 86.5833 38.8333 89.4167 47.5C92.25 56.1667 93.6667 64.7778 93.6667 73.3333C93.6667 86.3333 89.1389 97.3611 80.0833 106.417C71.0278 115.472 60 120 47 120ZM47 113.333C58.1111 113.333 67.5556 109.444 75.3333 101.667C83.1111 93.8889 87 84.4444 87 73.3333C87 66 85.75 58.4167 83.25 50.5833C80.75 42.75 77.5278 35.5833 73.5833 29.0833C69.6389 22.5833 65.3056 17.2222 60.5833 13C55.8611 8.77778 51.3333 6.66667 47 6.66667C42.6667 6.66667 38.1389 8.75 33.4167 12.9167C28.6944 17.0833 24.3611 22.4167 20.4167 28.9167C16.4722 35.4167 13.25 42.6111 10.75 50.5C8.25 58.3889 7 66 7 73.3333C7 84.4444 10.8889 93.8889 18.6667 101.667C26.4444 109.444 35.8889 113.333 47 113.333ZM51.1667 99.8333C52.1667 99.8333 52.9722 99.5 53.5833 98.8333C54.1944 98.1667 54.5 97.3889 54.5 96.5C54.5 95.5 54.1944 94.6944 53.5833 94.0833C52.9722 93.4722 52.1667 93.1667 51.1667 93.1667C44.7222 93.1667 39.2222 90.8889 34.6667 86.3333C30.1111 81.7778 27.8333 76.2778 27.8333 69.8333C27.8333 68.8333 27.5278 68.0278 26.9167 67.4167C26.3056 66.8056 25.5 66.5 24.5 66.5C23.6111 66.5 22.8333 66.8056 22.1667 67.4167C21.5 68.0278 21.1667 68.8333 21.1667 69.8333C21.1667 78.1667 24.0833 85.25 29.9167 91.0833C35.75 96.9167 42.8333 99.8333 51.1667 99.8333Z" fill={BLACK} />
    </svg>
  ); else return (
    <svg width={X} height={Y} viewBox={`0 0 ${X} ${Y}`} fill="none" xmlns="http://www.w3.org/2000/svg" className="vector">
      <path d="M47 120C34 120 22.9722 115.472 13.9167 106.417C4.86111 97.3611 0.333328 86.3333 0.333328 73.3333C0.333328 64.7778 1.74999 56.1667 4.58333 47.5C7.41666 38.8333 11.0833 30.9722 15.5833 23.9167C20.0833 16.8611 25.1111 11.1111 30.6667 6.66667C36.2222 2.22222 41.6667 0 47 0C52.4444 0 57.9167 2.22222 63.4167 6.66667C68.9167 11.1111 73.9167 16.8611 78.4167 23.9167C82.9167 30.9722 86.5833 38.8333 89.4167 47.5C92.25 56.1667 93.6667 64.7778 93.6667 73.3333C93.6667 86.3333 89.1389 97.3611 80.0833 106.417C71.0278 115.472 60 120 47 120ZM47 113.333C58.1111 113.333 67.5556 109.444 75.3333 101.667C83.1111 93.8889 87 84.4444 87 73.3333C87 66 85.75 58.4167 83.25 50.5833C80.75 42.75 77.5278 35.5833 73.5833 29.0833C69.6389 22.5833 65.3056 17.2222 60.5833 13C55.8611 8.77778 51.3333 6.66667 47 6.66667C42.6667 6.66667 38.1389 8.75 33.4167 12.9167C28.6944 17.0833 24.3611 22.4167 20.4167 28.9167C16.4722 35.4167 13.25 42.6111 10.75 50.5C8.25 58.3889 7 66 7 73.3333C7 84.4444 10.8889 93.8889 18.6667 101.667C26.4444 109.444 35.8889 113.333 47 113.333ZM51.1667 99.8333C52.1667 99.8333 52.9722 99.5 53.5833 98.8333C54.1944 98.1667 54.5 97.3889 54.5 96.5C54.5 95.5 54.1944 94.6944 53.5833 94.0833C52.9722 93.4722 52.1667 93.1667 51.1667 93.1667C44.7222 93.1667 39.2222 90.8889 34.6667 86.3333C30.1111 81.7778 27.8333 76.2778 27.8333 69.8333C27.8333 68.8333 27.5278 68.0278 26.9167 67.4167C26.3056 66.8056 25.5 66.5 24.5 66.5C23.6111 66.5 22.8333 66.8056 22.1667 67.4167C21.5 68.0278 21.1667 68.8333 21.1667 69.8333C21.1667 78.1667 24.0833 85.25 29.9167 91.0833C35.75 96.9167 42.8333 99.8333 51.1667 99.8333Z" fill={BLACK} />
    </svg>
  )
}

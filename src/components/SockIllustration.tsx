interface SockIllustrationProps {
  variant?: 1 | 2 | 3 | 4;
  className?: string;
}

export default function SockIllustration({ variant = 1, className = "" }: SockIllustrationProps) {
  if (variant === 1) {
    // 핑크 도트 양말
    return (
      <svg viewBox="0 0 200 280" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
        <rect width="200" height="280" rx="16" fill="#FFF5F3" />
        {/* Sock body */}
        <path d="M70 60 L70 170 Q70 200 85 215 L120 245 Q140 260 155 245 L155 215 Q155 200 140 190 L130 185 L130 60 Z" fill="#F4978E" />
        {/* Cuff */}
        <rect x="68" y="55" width="64" height="20" rx="4" fill="#E8877E" />
        <rect x="68" y="62" width="64" height="6" rx="2" fill="#F4978E" opacity="0.5" />
        {/* Dots */}
        <circle cx="90" cy="100" r="5" fill="white" opacity="0.6" />
        <circle cx="110" cy="120" r="5" fill="white" opacity="0.6" />
        <circle cx="90" cy="140" r="5" fill="white" opacity="0.6" />
        <circle cx="110" cy="160" r="5" fill="white" opacity="0.6" />
        {/* Anti-slip dots on sole */}
        <circle cx="115" cy="225" r="3" fill="#E8877E" />
        <circle cx="125" cy="235" r="3" fill="#E8877E" />
        <circle cx="135" cy="225" r="3" fill="#E8877E" />
      </svg>
    );
  }

  if (variant === 2) {
    // 스트라이프 양말
    return (
      <svg viewBox="0 0 200 280" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
        <rect width="200" height="280" rx="16" fill="#FFF8F0" />
        {/* Sock body */}
        <path d="M70 60 L70 170 Q70 200 85 215 L120 245 Q140 260 155 245 L155 215 Q155 200 140 190 L130 185 L130 60 Z" fill="#FFD4C4" />
        {/* Stripes */}
        <rect x="70" y="90" width="60" height="8" rx="2" fill="#F4978E" opacity="0.5" />
        <rect x="70" y="110" width="60" height="8" rx="2" fill="#F4978E" opacity="0.5" />
        <rect x="70" y="130" width="60" height="8" rx="2" fill="#F4978E" opacity="0.5" />
        <rect x="70" y="150" width="60" height="8" rx="2" fill="#F4978E" opacity="0.5" />
        {/* Cuff */}
        <rect x="68" y="55" width="64" height="20" rx="4" fill="#F4978E" />
        {/* Toe */}
        <path d="M120 245 Q140 260 155 245 L155 230 Q145 240 130 235 Z" fill="#F4978E" opacity="0.4" />
        {/* Stars */}
        <text x="85" y="185" fontSize="14" fill="#F4978E" opacity="0.6">★</text>
        <text x="105" y="175" fontSize="10" fill="#F4978E" opacity="0.4">★</text>
      </svg>
    );
  }

  if (variant === 3) {
    // 동물 얼굴 양말
    return (
      <svg viewBox="0 0 200 280" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
        <rect width="200" height="280" rx="16" fill="#FFF5F5" />
        {/* Sock body */}
        <path d="M70 60 L70 170 Q70 200 85 215 L120 245 Q140 260 155 245 L155 215 Q155 200 140 190 L130 185 L130 60 Z" fill="#FECACA" />
        {/* Cuff */}
        <rect x="68" y="55" width="64" height="20" rx="4" fill="#F4978E" />
        {/* Bear face on sock */}
        {/* Ears */}
        <circle cx="85" cy="105" r="8" fill="#E8877E" />
        <circle cx="115" cy="105" r="8" fill="#E8877E" />
        <circle cx="85" cy="105" r="5" fill="#FECACA" />
        <circle cx="115" cy="105" r="5" fill="#FECACA" />
        {/* Face */}
        <circle cx="100" cy="125" r="20" fill="white" opacity="0.7" />
        {/* Eyes */}
        <circle cx="93" cy="120" r="2.5" fill="#2c2c2c" />
        <circle cx="107" cy="120" r="2.5" fill="#2c2c2c" />
        {/* Nose */}
        <ellipse cx="100" cy="128" rx="4" ry="3" fill="#E8877E" />
        {/* Mouth */}
        <path d="M96 131 Q100 135 104 131" stroke="#E8877E" strokeWidth="1.5" fill="none" />
        {/* Anti-slip */}
        <circle cx="110" cy="220" r="2.5" fill="#F4978E" opacity="0.5" />
        <circle cx="120" cy="230" r="2.5" fill="#F4978E" opacity="0.5" />
        <circle cx="130" cy="220" r="2.5" fill="#F4978E" opacity="0.5" />
        <circle cx="140" cy="230" r="2.5" fill="#F4978E" opacity="0.5" />
      </svg>
    );
  }

  // variant 4: 하트 패턴 양말
  return (
    <svg viewBox="0 0 200 280" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <rect width="200" height="280" rx="16" fill="#FFF0F0" />
      {/* Sock body */}
      <path d="M70 60 L70 170 Q70 200 85 215 L120 245 Q140 260 155 245 L155 215 Q155 200 140 190 L130 185 L130 60 Z" fill="#FFE0D6" />
      {/* Cuff */}
      <rect x="68" y="55" width="64" height="20" rx="4" fill="#F4978E" />
      <rect x="68" y="65" width="64" height="5" rx="2" fill="white" opacity="0.3" />
      {/* Hearts */}
      <text x="82" y="105" fontSize="16" fill="#F4978E" opacity="0.7">♥</text>
      <text x="102" y="125" fontSize="12" fill="#F4978E" opacity="0.5">♥</text>
      <text x="82" y="145" fontSize="14" fill="#F4978E" opacity="0.6">♥</text>
      <text x="105" y="160" fontSize="10" fill="#F4978E" opacity="0.4">♥</text>
      <text x="88" y="175" fontSize="16" fill="#F4978E" opacity="0.7">♥</text>
      {/* Sole grip dots */}
      <circle cx="115" cy="222" r="2" fill="#F4978E" opacity="0.4" />
      <circle cx="125" cy="232" r="2" fill="#F4978E" opacity="0.4" />
      <circle cx="135" cy="222" r="2" fill="#F4978E" opacity="0.4" />
      <circle cx="145" cy="232" r="2" fill="#F4978E" opacity="0.4" />
      <circle cx="120" cy="242" r="2" fill="#F4978E" opacity="0.4" />
    </svg>
  );
}

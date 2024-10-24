import globals from 'globals'
import pluginJs from '@eslint/js'
import pluginReact from 'eslint-plugin-react'

export default [
  // 파일 확장자 설정
  { files: ['**/*.{js,mjs,cjs,jsx}'] },

  // 브라우저 환경과 최신 ECMAScript 설정
  {
    languageOptions: {
      globals: globals.browser,
      ecmaVersion: 'latest',
      sourceType: 'module',
    },
  },

  // 기본 ESLint 및 React 규칙
  pluginJs.configs.recommended,
  pluginReact.configs.flat.recommended,

  // 사용자 정의 규칙 추가
  {
    rules: {
      // React 관련 규칙
      'react/prop-types': 'off', // PropTypes 비활성화
      'react/react-in-jsx-scope': 'off', // React 17 이상에서 필요 없는 JSX 스코프 규칙 비활성화

      // 기타 규칙
      'no-unused-vars': 'off', // 사용하지 않는 변수에 대한 경고 비활성화
    },
  },
]

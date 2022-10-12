module.exports = function (api) {
  /**
  babel 설정 파일을 한번만 실행하겠다는 뜻
  https://babeljs.io/docs/en/config-files#apicache
  */
  api.cache(true);

  const presets = [
    [
      "@babel/preset-env",
      {
        /** 지원하는 브라우저 범위 */
        targets: "> 0.25%, not dead",
        /** pollyfill을 필요한 것만 import 할 지 */
        useBuiltIns: "usage", // "entry" 전부 추가
        corejs: 3,
        /** ES6 module syntax 사용 여부 */
        modules: false,
      },
    ],
  ];

  const plugins = [
    [
      "module-resolver",
      {
        root: ["./src"],
        alias: {
          imgs: "./public/images"
        }
      }
    ]
  ]

  return {
    presets,
    plugins
  };
};
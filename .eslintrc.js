module.exports = {
    "env": {
        "browser": true,
        "es2021": true,
        "jest": true,
        "es6": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:react/recommended"
    ],
    settings: {
        react: {
            "version": "detect"
        }
    },
    
    "parserOptions": {
        "ecamaFeatures": {
            "jsx": true
        },
        "ecmaVersion": 12,
        "sourceType": "module"
    },
    "plugins": [
        "react"
    ],
    "rules": {
        "react/react-in-jsx-scope":"off",
        "indent":["error",4],
        "linebreak-style": ["error", "windows"],
        "quotes": ["error" ,"single"],
        "semi": ["error", "always"],
        "no-unused-vars": "off",
        "react/prop-types": "off"
    }
}

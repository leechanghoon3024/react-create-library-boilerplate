import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import { terser } from 'rollup-plugin-terser';
import babel from '@rollup/plugin-babel';
import replace from '@rollup/plugin-replace';
import typescript from '@rollup/plugin-typescript';
import postcss from 'rollup-plugin-postcss';
import image from '@rollup/plugin-image';
import serve from 'rollup-plugin-serve';
import livereload from 'rollup-plugin-livereload';
export default {
    input: 'src/index.tsx',
    output:
        {
            file: 'dist/bundle.umd.js',
            format: 'umd',
            name: 'MyLibrary',
            globals: {
                react: 'React',
                'react-dom': 'ReactDOM'
            }
        }
    ,
    plugins: [
        resolve(),
        commonjs(),
        babel({ babelHelpers: 'bundled' }),
        terser(),
        replace({
            'process.env.NODE_ENV': JSON.stringify('production')
        }),
        typescript(),
        postcss({
            extensions: ['.css']
        }),
        image(),
    ],
    external: ['react', 'react-dom']
};

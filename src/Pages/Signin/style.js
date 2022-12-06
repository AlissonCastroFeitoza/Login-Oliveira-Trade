import style from 'styled-components'

export const Container = style.div `
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
gap: 10px;
height:100vh;
`

export const LogoForm = style.div `
display:flex;
align-items: center;
justify-content: center;
flex-direction: column;
color: #3939d3;
font-size: 6em;
`

export const Content = style.div `
gap:15px;
display:flex;
align-items:center;
justify-content:center;
flex-direction: column;
box-shadow: 0 1px 2px #0003;
background-color:white;
width:100%;
max-width:350px;
padding:20px;
border-radius: 5px;
`


export const Label = style.label `
font-size:17px;
font-weight:600;
color:#676767;
`

export const LabelSignup = style.label `
font-size 16px;
color: #676767;
`

export const LabelError = style.label `
font-size: 14px;
color:red;
`

export const Strong = style.strong `
cursor:pointer;
a{
    text-decoration:none;
    color: #676767;
}
`
import "./config/base.css"

import SelectMoeda from "./components/select";

const $root = document.querySelector('#root')

$root.insertAdjacentHTML("beforeend",
`
    ${SelectMoeda()}
`
)
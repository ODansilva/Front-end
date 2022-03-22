import "./config/base.css"

import SelectMoeda from "./components/select";

const $root = querySelector('#root');

$root.insertAdjacentHTML("beforeend",
`
    ${SelectMoeda()}
`
)
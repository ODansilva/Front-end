import "./style.css"
function SelectMoeda(idmoeda, content){
    return /*html*/`
        <select>
            <option class="${idmoeda}" id="op">
                ${content}
            </option>
        </select>
    `;
}
export default SelectMoeda;
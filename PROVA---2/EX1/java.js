const insertBear = document.getElementById("insertBear")
const removeAll = document.getElementById("removeAllBears")

function adicionar() {
    const line = document.createElement('div');

    const caption = document.getElementById("caption").value;
    const bearImage = document.getElementById("image").value;

    line.innerHTML = `
                    <div class="bearFigure">
                        <div class="bearImage">
                            <img src="${bearImage}" alt="Random bear" />
                        </div>
                        <div class="caption">${caption}</div>
                    </div>`;
    
    const table = document.getElementById('bearsContainer');
    table.append(line)
}

function remover() {
    const line = document.getElementsByTagName('div')[4];

    line.innerHTML = `
                    <div id="bearsContainer">
                        <div class="bearFigure">
                            <div class="bearImage">
                                <img src="https://placebear.com/201/200" alt="Random bear" />
                            </div>
                            <div class="caption">Paddington</div>
                        </div>
                    </div>
                    `
    
}

insertBear.addEventListener('click', adicionar)
removeAll.addEventListener('click', remover)

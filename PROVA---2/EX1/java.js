const divB = document.createElement('div')[2];

divB.addEventListener('click', function(event)
{
    const line = document.createElement('div');

    const caption = document.getElementById("caption").value;
    console.log(caption);
    const bearImage = document.getElementById("image").value;
    console.log(bearImage);

    line.innerHTML = `<div id="bearsContainer">
                        <div class="bearFigure">
                            <div class="bearImage">
                                <img src="https://placebear.com/201/200" alt="Random bear" />
                            </div>
                            <div class="caption">Paddington</div>
                        </div>
                    </div>`

})
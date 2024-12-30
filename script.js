document.addEventListener('DOMContentLoaded', () => {
    createModal('Welcome!', 'Click items to interact');

    let divList = ['one', 'two'];
    let currentDiv = 1;
    let milkGoat = [false, false];
    
    for(let i = 2; i <= divList.length; i++) {
        document.getElementById(`${divList[i - 1]}`).style.display = 'none';
    }
    
    document.getElementById('next').addEventListener('click', () => {
        document.getElementById(`${divList[currentDiv - 1]}`).style.display = 'none';
        currentDiv = currentDiv >= divList.length ? 1 : currentDiv + 1;
        document.getElementById(`${divList[currentDiv - 1]}`).style.display = 'flex';

        if(currentDiv === 2) {
            setInterval(() => {
                document.getElementById('two').style.paddingTop = `${Math.floor(Math.random() * 300)}px`;
            }, 2000);
        }
    });

    document.getElementById('note').addEventListener('click', async () => {
        if (currentDiv == 1) {
            await createModal('Note', 'Biotechnology is the use of biological systems, organisms, or derivatives to develop products or processes for a specific use.', 'Okay');
        } else if (currentDiv == 2) {
            await createModal('Note', 'Genetically modified organisms (GMOs) are organisms that contain recombinant DNA. Organisms that contain recombinant DNA are known as transgenic organisms.');
        }
    });

    document.getElementById('microscope').addEventListener('click', async () => {
        await createModal('Microscope', 'This is an electron microscope.', 'Okay');
    });

    document.getElementById('gene').addEventListener('click', async () => {
        await createModal('What is DNA?', 'Deoxyribonucleic acid (abbreviated DNA) is the molecule that carries genetic information for the development and functioning of an organism.', 'Okay');
    });

    document.getElementById('npc').addEventListener('click', async () => {
        if (milkGoat[0] && milkGoat[1]) {
            await createModal('Sara', 'Thank you so much! I can\'t believe you actually did it. I feel so much better now. I can\'t thank you enough.', 'You\'re welcome');
            document.getElementById('two').style.cursor = "default";
            milkGoat[0] = false;
        } else if (milkGoat[0] && !milkGoat[1]) {
            await createModal('Sara', 'Can you help me get the milk?', 'Okay');
        } else if (!milkGoat[0] && milkGoat[1]) {
            await createModal('Sara', 'Thank you for bringing the milk. This is no ordinary milk—it’s produced by a genetically modified goat. Scientists used genetic engineering to insert the human gene for antithrombin into the goat’s DNA. Antithrombin is a protein that helps regulate blood clotting, and people with haemophilia, like me, lack the ability to clot blood effectively.', 'I see');
            await createModal('Sara', 'By modifying the goat’s genome, the protein is produced in its milk, making it easier and more efficient to extract compared to other methods. This milk can be purified to provide the clotting factor I need to prevent excessive bleeding. It’s a groundbreaking example of how biotechnology can directly improve lives.', 'That\'s amazing');
        } else {
            await createModal('Sara', 'Hi there... Oh, are you here to help? I\'ve heard about the special goats with milk that can help people like me. I\'ve been waiting for someone to bring me some.', 'What do you need?');
            await createModal('Sara', 'It\'s their milk—it has a special protein that helps my blood clot. I have a diasease called haemophilia, even a tiny cut could be dangerous for me. I need a bucket of goat milk to keep me safe.', 'I\'ll get it for you');
            document.getElementById('two').style.cursor = "url('images/bucket.png'), auto";
            milkGoat[0] = true;
        }
    });

    document.getElementById('goat').addEventListener('click', () => {
        if (!milkGoat[0]) {
            createModal('Goat', 'Baaahhhhh.. I\'m a genetically modified goat. I produce milk that can help people with haemophilia. You\'ll need a bucket to collect milk.', 'How you talk!?');
            return;
        } else {
            document.getElementById('two').style.cursor = "url('images/milk_bucket.png'), auto";
            milkGoat[1] = true;
        }
        
        
    });
});

function createModal(title, content, btn) {
    return new Promise((resolve) => {
        const modal = document.createElement('div');
        modal.classList.add('modal');

        const modalContent = document.createElement('div');
        modalContent.classList.add('modal-content');

        const modalTitle = document.createElement('h2');
        modalTitle.textContent = title;

        const modalBody = document.createElement('p');
        modalBody.textContent = content;

        const closeButton = document.createElement('button');
        closeButton.textContent = btn || 'Okay';
        closeButton.onclick = () => {
            document.body.removeChild(modal);
            resolve();
        };

        modalContent.appendChild(modalTitle);
        modalContent.appendChild(modalBody);
        modalContent.appendChild(closeButton);
        modal.appendChild(modalContent);
        document.body.appendChild(modal);
    });
}
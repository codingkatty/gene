document.addEventListener('DOMContentLoaded', () => {
    createModal('Welcome!', 'Click items to interact');

    let divList = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight'];
    let currentDiv = 1;
    let milkGoat = [false, false];
    let plantWheat = [false, false, false, false];
    let geneProcess = 0;
    let evidence = [false, false];
    let oilCleanup = [false, false];
    let oilsRemaining = 2;

    const geneImage = document.getElementById('insulin');
    const guide = [
        {
            image: 'images/gene.png',
            text: 'A spliced human DNA with insulin gene',
            guide: 'Cut the gene with restriction enzymes'
        },
        {
            image: 'images/insulin.png',
            text: 'Insulin gene',
            guide: 'You\'ve cut a gene, now we\'ll need to cut a plasmid'
        },
        {
            image: 'images/plasmid.png',
            text: 'Plasmid',
            guide: 'A plasmid is a circular DNA found in bacteria which is used as a cloning vector'
        },
        {
            image: 'images/cut_plasmid.png',
            text: 'Cut plasmid',
            guide: 'You\'ve cut a plasmid with restriction enzymes, now we\'ll need to insert the gene'
        },
        {
            image: 'images/recombinant_plasmid.png',
            text: 'A recombinant plasmid',
            guide: 'Human insulin gene has been inserted into the plasmid'
        },
        {
            image: 'images/bacterium.png',
            text: 'A trnasgenic bacterium',
            guide: 'The recombinant plasmid is introduced into a bacterium'
        },
        {
            image: 'images/insulin.gif',
            text: 'Insulin procuded!',
            guide: 'Bacterial clone multiplies and produces insulin'
        }
    ];

    for (let i = 2; i <= divList.length; i++) {
        document.getElementById(`${divList[i - 1]}`).style.display = 'none';
    }

    document.getElementById('next').addEventListener('click', () => {
        document.getElementById(`${divList[currentDiv - 1]}`).style.display = 'none';
        currentDiv = currentDiv >= divList.length ? 1 : currentDiv + 1;
        document.getElementById(`${divList[currentDiv - 1]}`).style.display = 'flex';

        if (currentDiv === 2) {
            setInterval(() => {
                document.getElementById('two').style.paddingTop = `${Math.floor(Math.random() * 300)}px`;
            }, 2000);
        } else if (currentDiv === 8) {
            setInterval(() => {
                document.getElementById('eight').style.paddingTop = `${Math.floor(Math.random() * 300)}px`;
            }, 2000);
        }
    });

    document.getElementById('note').addEventListener('click', async () => {
        if (currentDiv == 1) {
            await createModal('Note', 'Genetic engineering is a gene manipulation technique to genetically modify an organism to form new gene combinations.');
        } else if (currentDiv == 2) {
            await createModal('Note', 'Genetically modified organisms (GMOs) are organisms that contain recombinant DNA. Organisms that contain recombinant DNA are known as transgenic organisms.');
        } else if (currentDiv == 3) {
            await createModal('Note', 'Recombinant DNA technology has successfully produced many crops (rice, oil palm, pineapple, corn and soybeans) as well as livestock (salmon, cattle and goats) that have the desired characteristics, such as resistance to herbicide, resistance to disease, application in medicine, tolerance to heavy metals and resistance to pest.');
        } else if (currentDiv == 4) {
            await createModal('Note', 'Examples of GMF are Golden Rice, Super Salmon and Bt Corn');
        } else if (currentDiv == 5) {
            await createModal('Note', 'In the past, insulin was extracted from the pancreas of cattle or pigs to treat patients with diabetes mellitus.');
        } else if (currentDiv == 6) {
            await createModal('Note', 'Biotechnology aims to improve the quality of livestock or crop products as well as to develop the use of microorganisms for a specific purpose.');
        } else if (currentDiv == 7) {
            await createModal('Note', 'DNA profiling is a forensic technique used to identify individuals based on their DNA.');
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

    document.getElementById('farmer').addEventListener('click', async () => {
        if (plantWheat[0] && plantWheat[1] && plantWheat[2]) {
            await createModal('Farmer', 'Thank you so much! I can\'t believe you actually did it. I feel so much better now. I can\'t thank you enough.', 'You\'re welcome');
            await createModal('Farmer', 'Golden Rice is a special type of rice modified with genes from a daffodil and a bacterium. These genes make it produce beta-carotene in the grain, which our bodies turn into vitamin A. This helps prevent blindness and boosts immunity, especially for kids in places where vitamin A deficiency is common.')
            document.getElementById('three').style.cursor = "default";
            plantWheat = [false, false, false, false];
        } else if (plantWheat[0] && plantWheat[1] && !plantWheat[2]) {
            await createModal('Farmer', 'I see that it has fully grown. Would ya mind help me harvest it?', 'Sure');
            document.getElementById('three').style.cursor = "url('images/stone_hoe.png'), auto";
            plantWheat[2] = true;
        } else {
            await createModal('Farmer', 'Ouch!! Would ya\' mind lending a hand? My feet hurts, it would be nice if you could help me plant this wheat!', 'Why does it look different?');
            await createModal('Farmer', 'It\'s the wheat—it has a special gene, it has more vitamin A. This is called Golden Rice. It can help prevent vitamin A deficiency, which can cause blindness and other health problems. By modifying the wheat’s genome, we can help people get the nutrients they need to stay healthy.', 'I\'ll help you');
            document.getElementById('three').style.cursor = "url('images/seed_mc.png'), auto";
            plantWheat[0] = true;
        }
    });

    document.getElementById('soil').addEventListener('click', async () => {
        if (!plantWheat[0]) {
            await createModal('Soil', 'This is the soil that the wheat will be planted in. You need to plant the seeds here.', 'Okay');
            return;
        } else if (plantWheat[0] && !plantWheat[1]) {
            document.getElementById('three').style.cursor = "default";
            document.getElementById('soil').src = 'images/soil_grow.gif';
            plantWheat[1] = true;
        } else if (plantWheat[0] && plantWheat[1] && plantWheat[2] && !plantWheat[3]) {
            document.getElementById('three').style.cursor = "url('images/wheat_mc.png'), auto";
            document.getElementById('soil').src = 'images/soil.png';
            plantWheat[2] = true;
        }
    });

    document.getElementById('guide').addEventListener('click', async () => {
        if (window.getComputedStyle(geneImage).display === 'none') {
            geneImage.style.display = 'block';
            document.getElementById('guide-text').textContent = guide[geneProcess].text;
        } else {
            await createModal('Guide', guide[geneProcess].guide);
        }
    });

    document.getElementById('insulin').addEventListener('click', () => {
        geneProcess++;
        if (geneProcess >= guide.length) {
            geneProcess = 0;
        }
        geneImage.src = guide[geneProcess].image;
        document.getElementById('guide-text').textContent = guide[geneProcess].text;
    });

    document.getElementById('biotechnology').addEventListener('click', async () => {
        await createModal('Biotechnology', 'Biotechnology is a field which utilises technology or method to manipulate organisms for the production of biological products.');
    });

    document.getElementById('police').addEventListener('click', async () => {
        if (!evidence[0] && !evidence[1]) {
            await createModal('Officer Ken', 'Ah, you\'re here! Just in time. I need your expertise to solve this case. We\'ve got a few suspicious clues lying around, and I need you to analyze them in the lab.', 'Good morning officer');
            await createModal('Officer Ken', 'Start with that bloodstain over there. Bring me a DNA profile of it when you\'re done.', 'On it!');
            document.getElementById('seven').style.cursor = "url('images/bag.png'), auto";
        } else if (evidence[0] && !evidence[1]) {
            await createModal('Officer Ken', 'Great work! Did you know that DNA profiling was invented by Sir Alec Jeffreys in 1985 at the University of Leicester? It\'s a forensic game-changer.', 'Ooo.. Tell me more');
            await createModal('Officer Ken', 'Using DNA from blood, semen, or even skin cells, we can identify individuals because DNA is unique to everyone—except for identical twins.', 'Interesting!');
            await createModal('Officer Ken', 'Now, check out that torn fabric on the chair. There might be some skin cells on it. Grab a sample and let\'s see what story it tells.', 'Got it');
            document.getElementById('seven').style.cursor = "url('images/bag.png'), auto";
        } else if (evidence[1]) {
            await createModal('Officer Ken', 'Good find. Thank you for helping out. Remember, human DNA differs significantly from animal DNA, so it\'s easy to identify the source.', 'Continue');
            await createModal('Officer Ken', 'DNA profiling has so many applications beyond criminal cases—it helps with paternity disputes, identifying genetic diseases, and even determining if an organ donor matches a recipient.', 'Wow!');
            await createModal('Officer Ken', 'With all this evidence analyzed, I think we\'re closing in on the truth. Let\'s send everything to the lab and wrap this up. Great teamwork!', 'Thank you');
            document.getElementById('seven').style.cursor = "default";
            evidence = [false, false];
        }
    });

    document.getElementById('blood').addEventListener('click', () => {
        if (!evidence[0] && document.getElementById('seven').style.cursor.includes('bag.png')) {
            document.getElementById('seven').style.cursor = "url('images/bag_fill.png'), auto";
            evidence[0] = true;
        }
    });

    document.getElementById('chair').addEventListener('click', () => {
        if (evidence[0] && !evidence[1] && document.getElementById('seven').style.cursor.includes('bag.png')) {
            document.getElementById('seven').style.cursor = "url('images/bag_fill.png'), auto";
            evidence[1] = true;
        }
    });

    document.getElementById('ship').addEventListener('click', async () => {
        if (!oilCleanup[0]) {
            await createModal('Ship', 'Ahoy matey! It seems like some oil spills I see there in the vast sea? Oil spills are harmful to marine life and the environment. We need to clean it up quickly!', 'How?');
            await createModal('Ship', 'Here, take some Alcanivorax borkumensis bacteria. This bacteria can decompose the oil in the ocean. Return to me after you do so.', 'Aye aye captain');
            document.getElementById('eight').style.cursor = "url('images/bacteria.png'), auto";
            oilCleanup[0] = true;
        } else if (oilCleanup[0] && oilsRemaining === 0) {
            await createModal('Ship', 'Well done! The bacteria have cleaned up all the oil. This is a great example of bioremediation - using living organisms to clean up pollution!', 'Amazing!');
        } else if (oilCleanup[1]) {
            await createModal('Did you know?', 'Most of the molecules in petroleum crude oil and purified petroleum products can be decomposed biologically using bacteria.', 'Ooo');
        }
    });

    const oilGif = new Image();
    oilGif.src = 'images/oil_oneloop.gif';

    document.querySelectorAll('.oil').forEach((oil, index) => {
        oil.addEventListener('click', () => {
            if (oilCleanup[0] && !oil.src.includes('oil_oneloop.gif') && !oil.src.includes('emptyoil.png')) {
                oil.src = `images/oil_oneloop.gif?id=${index}`;
                oilsRemaining--;
                oil.style.pointerEvents = 'none';
            }
            if (oilsRemaining === 0) {
                oilCleanup[1] = true;
                document.getElementById('eight').style.cursor = "default";
            }
        });
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
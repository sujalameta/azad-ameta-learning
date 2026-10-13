// =====================================================
// AZAD AMETA - BIOLOGY LEARNING WEBSITE
// Chapter lists and revision notes for Classes 11 and 12
// =====================================================


// Update footer year automatically
document.querySelectorAll(".current-year").forEach(function (element) {
    element.textContent = new Date().getFullYear();
});


// -----------------------------------------------------
// CLASS 11 BIOLOGY NOTES
// -----------------------------------------------------

const class11Chapters = [

    {
        title: "The Living World",

        summary: "Characteristics of living organisms, biodiversity and taxonomy.",

        notes: [
            "Living organisms show characteristics such as growth, metabolism, cellular organisation and response to stimuli.",
            "Biodiversity refers to the variety of living organisms found on Earth.",
            "Taxonomy deals with identification, nomenclature and classification of organisms.",
            "Binomial nomenclature uses two names: genus and specific epithet.",
            "The taxonomic hierarchy includes species, genus, family, order, class, phylum or division, and kingdom."
        ],

        question: "What is binomial nomenclature?",

        answer: "It is the scientific naming system in which an organism is given a two-part name consisting of its genus and specific epithet."
    },

    {
        title: "Biological Classification",

        summary: "Classification of organisms into groups based on their characteristics.",

        notes: [
            "Classification organises organisms into groups based on similarities and differences.",
            "Whittaker proposed a five-kingdom classification: Monera, Protista, Fungi, Plantae and Animalia.",
            "Bacteria are prokaryotic organisms, while protists are generally unicellular eukaryotes.",
            "Fungi are heterotrophic organisms that commonly absorb nutrients from their surroundings.",
            "Viruses are acellular and require host cells to reproduce."
        ],

        question: "Name the five kingdoms in Whittaker's classification.",

        answer: "Monera, Protista, Fungi, Plantae and Animalia."
    },

    {
        title: "Plant Kingdom",

        summary: "Major plant groups and their distinguishing characteristics.",

        notes: [
            "Algae are generally simple photosynthetic organisms commonly found in aquatic environments.",
            "Bryophytes are often called amphibians of the plant kingdom because they depend on water for sexual reproduction.",
            "Pteridophytes possess vascular tissues but do not produce seeds.",
            "Gymnosperms bear naked seeds, whereas angiosperms produce seeds enclosed within fruits.",
            "Alternation of generations involves the gametophyte and sporophyte phases."
        ],

        question: "How do gymnosperms differ from angiosperms?",

        answer: "Gymnosperms have naked seeds, while angiosperm seeds are enclosed within fruits."
    },

    {
        title: "Animal Kingdom",

        summary: "Animal classification based on body organisation and structural features.",

        notes: [
            "Animals can be classified using body symmetry, germ layers, segmentation and body cavity.",
            "Poriferans have pores in their bodies and a canal system.",
            "Cnidarians possess specialised stinging cells called cnidocytes.",
            "Annelids show segmentation, while arthropods possess jointed appendages.",
            "Chordates possess a notochord at least during one stage of development."
        ],

        question: "What is the main characteristic of chordates?",

        answer: "Chordates possess a notochord during at least one stage of their development."
    },

    {
        title: "Morphology of Flowering Plants",

        summary: "External structure and parts of flowering plants.",

        notes: [
            "The main vegetative organs are root, stem and leaves.",
            "Roots commonly absorb water and minerals and help anchor the plant.",
            "Stems support leaves and flowers and transport substances.",
            "Flowers contain reproductive structures, while fruits generally develop from ovaries.",
            "Plant organs may undergo modifications for storage, support, protection or other functions."
        ],

        question: "Name the main vegetative organs of a flowering plant.",

        answer: "Root, stem and leaves."
    },

    {
        title: "Anatomy of Flowering Plants",

        summary: "Internal tissues and organisation of roots, stems and leaves.",

        notes: [
            "Plant tissues are broadly classified into meristematic and permanent tissues.",
            "Xylem mainly transports water and minerals from roots to other parts.",
            "Phloem transports sugars and other organic substances.",
            "Dicot and monocot plants may differ in the arrangement of vascular bundles.",
            "Secondary growth increases the girth of many woody plants."
        ],

        question: "What are the main functions of xylem and phloem?",

        answer: "Xylem mainly transports water and minerals, while phloem transports sugars and other organic nutrients."
    },

    {
        title: "Structural Organisation in Animals",

        summary: "Animal tissues and their organisation into organs and organ systems.",

        notes: [
            "Animal tissues include epithelial, connective, muscular and neural tissues.",
            "Epithelial tissue covers body surfaces and lines internal organs.",
            "Connective tissue supports, binds and connects different structures.",
            "Muscle tissue produces movement through contraction.",
            "Neural tissue receives and transmits signals."
        ],

        question: "Name the four major types of animal tissues.",

        answer: "Epithelial, connective, muscular and neural tissues."
    },

    {
        title: "Cell: The Unit of Life",

        summary: "Cell structure, membranes and important organelles.",

        notes: [
            "The cell is the basic structural and functional unit of life.",
            "Prokaryotic cells lack a membrane-bound nucleus.",
            "Eukaryotic cells contain a membrane-bound nucleus and specialised organelles.",
            "Mitochondria are important sites of aerobic respiration and ATP production.",
            "Ribosomes participate in protein synthesis."
        ],

        question: "What is the main function of ribosomes?",

        answer: "Ribosomes are the cellular structures where proteins are synthesised."
    },

    {
        title: "Biomolecules",

        summary: "Chemical substances that build cells and support their functions.",

        notes: [
            "Major biological macromolecules include proteins, carbohydrates, lipids and nucleic acids.",
            "Proteins are made from amino acids.",
            "Nucleic acids such as DNA and RNA are involved in genetic information.",
            "Enzymes act as biological catalysts and accelerate biochemical reactions.",
            "ATP is an important energy-carrying molecule in cells."
        ],

        question: "What is an enzyme?",

        answer: "An enzyme is a biological catalyst that increases the rate of a biochemical reaction."
    },

    {
        title: "Cell Cycle and Cell Division",

        summary: "Stages of the cell cycle, mitosis and meiosis.",

        notes: [
            "The cell cycle consists of interphase and the division phase.",
            "Interphase includes G1, S and G2 phases.",
            "During mitosis, one parent cell produces two daughter cells with the same chromosome number.",
            "Meiosis reduces the chromosome number and produces haploid cells.",
            "Meiosis contributes to genetic variation."
        ],

        question: "What is the main difference between mitosis and meiosis?",

        answer: "Mitosis usually maintains chromosome number, whereas meiosis reduces it by half."
    },

    {
        title: "Photosynthesis in Higher Plants",

        summary: "Conversion of light energy into chemical energy in plants.",

        notes: [
            "Photosynthesis uses light energy to help synthesise carbohydrates from carbon dioxide and water.",
            "Chlorophyll and other pigments absorb light energy.",
            "The light-dependent reactions occur in the thylakoid membranes of chloroplasts.",
            "The Calvin cycle uses carbon dioxide to build carbohydrates.",
            "Light intensity, carbon dioxide concentration and temperature can affect photosynthesis."
        ],

        question: "Where do the light-dependent reactions occur?",

        answer: "They occur in the thylakoid membranes of chloroplasts."
    },

    {
        title: "Respiration in Plants",

        summary: "Cellular processes through which plants obtain usable energy.",

        notes: [
            "Cellular respiration breaks down organic substances to release usable energy.",
            "Glycolysis takes place in the cytoplasm.",
            "The Krebs cycle occurs in the mitochondrial matrix in eukaryotic cells.",
            "The electron transport chain contributes to ATP production during aerobic respiration.",
            "Anaerobic pathways can produce less ATP than complete aerobic oxidation."
        ],

        question: "Where does glycolysis take place?",

        answer: "Glycolysis takes place in the cytoplasm."
    },

    {
        title: "Plant Growth and Development",

        summary: "Plant growth, development and the role of plant hormones.",

        notes: [
            "Plant growth involves an increase in size, mass or cell number.",
            "Auxins influence cell elongation and several developmental responses.",
            "Gibberellins can promote stem elongation and seed germination.",
            "Cytokinins promote cell division in many plant tissues.",
            "Abscisic acid commonly participates in stress responses and seed dormancy."
        ],

        question: "Name two plant growth regulators.",

        answer: "Auxins and gibberellins are two examples of plant growth regulators."
    },

    {
        title: "Breathing and Exchange of Gases",

        summary: "Mechanics of breathing and the transport of respiratory gases.",

        notes: [
            "Breathing involves inspiration and expiration.",
            "Gas exchange occurs across thin respiratory surfaces.",
            "Oxygen is transported in blood mainly through haemoglobin.",
            "Carbon dioxide is transported in dissolved forms, including bicarbonate ions.",
            "The medulla and other brain regions participate in regulating respiration."
        ],

        question: "Which blood protein mainly transports oxygen?",

        answer: "Haemoglobin transports most of the oxygen in human blood."
    },

    {
        title: "Body Fluids and Circulation",

        summary: "Blood, lymph, the heart and the circulatory system.",

        notes: [
            "Blood consists of plasma and formed elements.",
            "Red blood cells carry oxygen, while white blood cells help defend the body.",
            "Platelets contribute to blood clotting.",
            "The human heart has four chambers.",
            "Double circulation involves pulmonary and systemic circulation."
        ],

        question: "What is double circulation?",

        answer: "It is circulation in which blood passes through the heart twice during one complete circuit of the body."
    },

    {
        title: "Excretory Products and Their Elimination",

        summary: "Removal of metabolic wastes and regulation of water and salts.",

        notes: [
            "The kidneys help remove nitrogenous wastes and regulate water and electrolyte balance.",
            "The nephron is the functional unit of the kidney.",
            "Urine formation involves filtration, selective reabsorption and secretion.",
            "The loop of Henle contributes to the concentration of urine.",
            "Hormones help regulate water reabsorption and kidney function."
        ],

        question: "What is the functional unit of the kidney?",

        answer: "The nephron is the functional unit of the kidney."
    },

    {
        title: "Locomotion and Movement",

        summary: "Muscles, the skeleton and mechanisms of body movement.",

        notes: [
            "Movement occurs through the coordinated action of muscles and skeletal structures.",
            "Skeletal muscles are attached to bones and help produce voluntary movements.",
            "Muscle contraction involves actin and myosin filaments.",
            "Joints connect bones and allow different types of movement.",
            "Calcium ions and ATP are important in skeletal muscle contraction."
        ],

        question: "Which proteins are important in skeletal muscle contraction?",

        answer: "Actin and myosin are the two main proteins involved in skeletal muscle contraction."
    },

    {
        title: "Neural Control and Coordination",

        summary: "Neurons, nerve impulses and the human nervous system.",

        notes: [
            "Neurons are specialised cells that receive and transmit information.",
            "An action potential involves changes in the membrane potential of a neuron.",
            "Synapses allow signals to pass between neurons or to other target cells.",
            "The central nervous system includes the brain and spinal cord.",
            "The peripheral nervous system connects the central nervous system with the rest of the body."
        ],

        question: "What is a synapse?",

        answer: "A synapse is a junction through which a signal is transmitted between a neuron and another cell."
    },

    {
        title: "Chemical Coordination and Integration",

        summary: "Endocrine glands, hormones and regulation of body functions.",

        notes: [
            "Endocrine glands release hormones into the blood.",
            "Hormones act on target cells containing appropriate receptors.",
            "The pituitary gland regulates several other endocrine glands.",
            "Thyroid hormones influence metabolism and development.",
            "Negative feedback helps keep many hormones within an appropriate range."
        ],

        question: "What is a hormone?",

        answer: "A hormone is a chemical messenger produced by cells or glands that affects target cells."
    }
];


// -----------------------------------------------------
// CLASS 12 BIOLOGY NOTES
// -----------------------------------------------------

const class12Chapters = [

    {
        title: "Sexual Reproduction in Flowering Plants",

        summary: "Flower structure, gametophytes, pollination and double fertilisation.",

        notes: [
            "The stamen is the male reproductive part, while the carpel or pistil is the female reproductive part.",
            "Microspore mother cells undergo meiosis to produce microspores that develop into pollen grains.",
            "The functional megaspore usually develops into the embryo sac.",
            "Pollination involves the transfer of pollen grains from anther to stigma.",
            "Double fertilisation includes syngamy and triple fusion.",
            "The ovule generally develops into a seed and the ovary into a fruit."
        ],

        question: "What are syngamy and triple fusion?",

        answer: "Syngamy is the fusion of a male gamete with the egg. Triple fusion occurs when the other male gamete fuses with the two polar nuclei."
    },

    {
        title: "Human Reproduction",

        summary: "Reproductive systems, gamete formation, fertilisation and development.",

        notes: [
            "The male reproductive system produces and transports sperm.",
            "Spermatogenesis occurs in the seminiferous tubules of the testes.",
            "Oogenesis takes place in ovarian follicles.",
            "Fertilisation in humans usually occurs in the oviduct.",
            "The developing blastocyst implants in the uterine lining.",
            "The placenta supports exchange of nutrients, gases and wastes between maternal and foetal systems."
        ],

        question: "Where does fertilisation usually occur in humans?",

        answer: "Fertilisation usually occurs in the ampullary region of the oviduct."
    },

    {
        title: "Reproductive Health",

        summary: "Reproductive well-being, contraception and prevention of sexually transmitted infections.",

        notes: [
            "Reproductive health includes physical, emotional and social well-being related to reproduction.",
            "Contraceptive methods help prevent unwanted pregnancies.",
            "Barrier methods can reduce the risk of certain sexually transmitted infections.",
            "Assisted reproductive technologies can support some people facing infertility.",
            "Reliable health information and qualified medical advice are important for reproductive health."
        ],

        question: "What is contraception?",

        answer: "Contraception refers to methods used to prevent pregnancy."
    },

    {
        title: "Principles of Inheritance and Variation",

        summary: "Mendelian genetics, inheritance patterns and genetic variation.",

        notes: [
            "Genes influence inherited characteristics.",
            "Mendel's principles describe patterns of inheritance for many traits.",
            "A dominant allele can influence a phenotype in a heterozygote under complete dominance.",
            "Independent assortment applies to genes that assort independently.",
            "Mutation and recombination contribute to genetic variation."
        ],

        question: "What is a heterozygous individual?",

        answer: "A heterozygous individual has two different alleles of a gene."
    },

    {
        title: "Molecular Basis of Inheritance",

        summary: "DNA, RNA, replication, transcription and protein synthesis.",

        notes: [
            "DNA stores hereditary information in most organisms.",
            "DNA replication produces copies of genetic material.",
            "Transcription uses DNA as a template to synthesise RNA.",
            "Translation uses the information carried by messenger RNA to produce a polypeptide.",
            "Mutations can change genetic sequences and may affect proteins or gene regulation."
        ],

        question: "What is transcription?",

        answer: "Transcription is the synthesis of RNA using a DNA template."
    },

    {
        title: "Evolution",

        summary: "Evolutionary change, natural selection and the origin of diversity.",

        notes: [
            "Evolution involves changes in heritable characteristics of populations over generations.",
            "Variation within populations provides the material on which natural selection acts.",
            "Natural selection can increase the frequency of traits that improve reproductive success in a given environment.",
            "Fossils provide evidence about organisms that lived in the past.",
            "Evolutionary relationships can be inferred from anatomical, molecular and other evidence."
        ],

        question: "What is natural selection?",

        answer: "Natural selection is a process in which heritable traits that improve reproductive success can become more common in a population."
    },

    {
        title: "Human Health and Disease",

        summary: "Health, pathogens, immunity and methods of preventing disease.",

        notes: [
            "Health is influenced by biological, social, environmental and lifestyle factors.",
            "Pathogens include certain bacteria, viruses, fungi and parasites.",
            "Innate immunity provides general defence mechanisms.",
            "Adaptive immunity involves specific responses and immunological memory.",
            "Vaccination can help the immune system develop protection against particular infections."
        ],

        question: "What is immunological memory?",

        answer: "It is the ability of the adaptive immune system to respond more effectively to an antigen encountered previously."
    },

    {
        title: "Microbes in Human Welfare",

        summary: "Useful microorganisms in food, industry, medicine and environmental management.",

        notes: [
            "Microorganisms are used in the production of foods such as curd and some fermented products.",
            "Industrial microbes can produce enzymes, organic acids and other useful substances.",
            "Certain microorganisms produce antibiotics.",
            "Microbes help decompose organic wastes during sewage treatment.",
            "Microorganisms also contribute to biogas production and nutrient cycling."
        ],

        question: "How are microbes useful in sewage treatment?",

        answer: "Microbes break down organic matter and help reduce the organic load of wastewater."
    },

    {
        title: "Biotechnology: Principles and Processes",

        summary: "Recombinant DNA technology and the tools used in biotechnology.",

        notes: [
            "Biotechnology uses biological systems or organisms to make useful products or processes.",
            "Restriction enzymes cut DNA at particular recognition sequences.",
            "DNA ligase joins DNA fragments.",
            "Plasmids and other vectors can carry selected DNA into host cells.",
            "Polymerase chain reaction can amplify a selected DNA sequence."
        ],

        question: "What is the role of DNA ligase in recombinant DNA technology?",

        answer: "DNA ligase joins DNA fragments by forming phosphodiester bonds."
    },

    {
        title: "Biotechnology and its Applications",

        summary: "Applications of biotechnology in medicine, agriculture and research.",

        notes: [
            "Biotechnology has applications in diagnostics, medicine and agricultural improvement.",
            "Recombinant DNA technology can be used to produce certain therapeutic proteins.",
            "Molecular diagnostic methods can help detect particular pathogens or genetic sequences.",
            "Genetically modified organisms may be developed for specific characteristics.",
            "Biotechnology applications require appropriate safety, ethical and regulatory consideration."
        ],

        question: "What is a genetically modified organism?",

        answer: "A genetically modified organism has had its genetic material altered using genetic engineering techniques."
    },

    {
        title: "Organisms and Populations",

        summary: "Ecological relationships, population characteristics and environmental responses.",

        notes: [
            "Ecology studies interactions between organisms and their environment.",
            "Population size and density can change through births, deaths, immigration and emigration.",
            "Organisms show adaptations to environmental conditions.",
            "Competition, predation, parasitism, mutualism and commensalism are important ecological interactions.",
            "Environmental factors influence the distribution and abundance of organisms."
        ],

        question: "What is mutualism?",

        answer: "Mutualism is an interaction in which both participating species benefit."
    },

    {
        title: "Ecosystem",

        summary: "Energy flow, food chains, productivity and nutrient cycling.",

        notes: [
            "An ecosystem includes organisms interacting with one another and with the physical environment.",
            "Producers convert energy into organic matter, while consumers obtain energy by feeding on organisms.",
            "Decomposers break down dead organic material.",
            "Energy flows through trophic levels and is lost from the system as heat.",
            "Nutrient cycles move essential elements between organisms and the environment."
        ],

        question: "What is a food chain?",

        answer: "A food chain is a sequence showing how energy and nutrients pass from one organism to another through feeding."
    },

    {
        title: "Biodiversity and its Conservation",

        summary: "Biodiversity, threats to species and conservation methods.",

        notes: [
            "Biodiversity includes variation within species, between species and among ecosystems.",
            "Habitat loss and fragmentation are important threats to biodiversity.",
            "Overexploitation, invasive species and pollution can also threaten organisms.",
            "In-situ conservation protects organisms in their natural habitats.",
            "Ex-situ conservation protects organisms outside their natural habitats, such as in seed banks or zoological facilities."
        ],

        question: "What is the difference between in-situ and ex-situ conservation?",

        answer: "In-situ conservation protects species in their natural habitats, while ex-situ conservation protects them outside those habitats."
    }
];


// -----------------------------------------------------
// HELPERS
// -----------------------------------------------------

function getChapters(classNumber) {
    if (String(classNumber) === "11") {
        return class11Chapters;
    }

    if (String(classNumber) === "12") {
        return class12Chapters;
    }

    return null;
}


// Create a chapter list automatically
function renderChapterList() {
    const list = document.getElementById("chapter-list");

    if (!list) {
        return;
    }

    const classNumber = document.body.dataset.class;
    const chapters = getChapters(classNumber);

    if (!chapters) {
        list.innerHTML = "<p>Class information not found.</p>";
        return;
    }

    list.innerHTML = "";

    chapters.forEach(function (chapter, index) {

        const article = document.createElement("article");
        article.className = "chapter-card chapter-ready";

        const number = String(index + 1).padStart(2, "0");

        article.innerHTML = `
            <span class="chapter-number">${number}</span>

            <div class="chapter-info">
                <h2>${chapter.title}</h2>

                <p>${chapter.summary}</p>

                <span class="available">
                    Revision Notes Available
                </span>
            </div>

            <a class="button primary chapter-action"
               href="chapter.html?class=${classNumber}&chapter=${index + 1}">
                Read Notes →
            </a>
        `;

        list.appendChild(article);
    });
}


// Show the notes for the chapter selected by the student
function renderChapterNotes() {
    const content = document.getElementById("chapter-content");

    if (!content) {
        return;
    }

    const parameters = new URLSearchParams(window.location.search);

    const classNumber = parameters.get("class");
    const chapterNumber = Number(parameters.get("chapter"));

    const chapters = getChapters(classNumber);

    if (
        !chapters ||
        !Number.isInteger(chapterNumber) ||
        chapterNumber < 1 ||
        chapterNumber > chapters.length
    ) {
        document.getElementById("chapter-title").textContent =
            "Chapter Not Found";

        document.getElementById("chapter-summary").textContent =
            "Please return to the chapter list and choose a valid chapter.";

        content.innerHTML = `
            <article class="notes-block">
                <h2>Chapter Not Found</h2>
                <p>Please choose a chapter from the chapter list.</p>
            </article>
        `;

        return;
    }

    const chapter = chapters[chapterNumber - 1];

    // Update page title and chapter heading
    document.title =
        `Class ${classNumber} Biology - ${chapter.title} | Azad Ameta`;

    document.getElementById("chapter-label").textContent =
        `CLASS ${classNumber} · BIOLOGY · CHAPTER ${chapterNumber}`;

    document.getElementById("chapter-title").textContent =
        chapter.title;

    document.getElementById("chapter-summary").textContent =
        chapter.summary;

    const backLink = document.getElementById("chapter-back-link");
    backLink.href = `class${classNumber}-biology.html`;

    backLink.textContent =
        `← Back to Class ${classNumber} Biology Chapters`;

    const topLink = document.getElementById("back-to-chapters");
    topLink.href = `class${classNumber}-biology.html`;

    topLink.textContent = "All Chapters";

    // Generate revision notes
    const noteList = chapter.notes
        .map(function (note) {
            return `<li>${note}</li>`;
        })
        .join("");

    content.innerHTML = `
        <article class="notes-block">
            <h2>Revision Notes</h2>

            <p>${chapter.summary}</p>

            <ul>
                ${noteList}
            </ul>
        </article>

        <article class="notes-block revision-box">
            <h2>Quick Revision</h2>

            <p>
                Read each key point carefully and explain it
                in your own words.
            </p>

            <p>
                Revise important definitions, diagrams and
                processes from the prescribed NCERT textbook.
            </p>
        </article>

        <article class="notes-block">
            <h2>Check Your Understanding</h2>

            <details>
                <summary>${chapter.question}</summary>

                <p>${chapter.answer}</p>
            </details>
        </article>

        <p class="note-notice">
            These are concise starter revision notes for learning.
            They are not a substitute for the complete textbook,
            diagrams or the current CBSE curriculum.
        </p>

        <div class="page-navigation">
            <a class="text-link"
               href="class${classNumber}-biology.html">
                ← Back to All Chapters
            </a>

            <a class="text-link"
               href="https://ncert.nic.in/textbook.php"
               target="_blank"
               rel="noopener noreferrer">
                Open NCERT Textbooks →
            </a>
        </div>
    `;
}


// -----------------------------------------------------
// START THE CORRECT PAGE FEATURE
// -----------------------------------------------------

if (document.body.dataset.page === "chapter-list") {
    renderChapterList();
}

if (document.body.dataset.page === "chapter-detail") {
    renderChapterNotes();
}
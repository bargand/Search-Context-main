import React, { useState } from "react";
import "./CategorySearch.css";

const CategorySearch = ({ category }) => {
  const [searchInput, setSearchInput] = useState("");
  const visibleItemsCount = 5; // Number of items to show initially

  // Example data for each category (You can replace this with actual data)
  const data =
    category === "Genetics"
      ? [
          { main: "HISTORY OF GENETICS", sub: "(Page-1-9)" },
          { main: "Introduction", sub: "(Page-1)" },
          { main: "Definitions", sub: "(Page-1)" },
          { main: "Reproduction in Animals.", sub: "(Page-1)" },
          { main: "Reproduction in Plants.", sub: "(Page-2)" },
          { main: "Preformation", sub: "(Page-2)" },
          { main: "Epigenesis", sub: "(Page-2)" },
          { main: "Inheritance of Acquired Characters", sub: "(Page-2)" },
          { main: "Organic Evolution", sub: "(Page-3)" },
          { main: "Germplasm Theory", sub: "(Page-3)" },
          { main: "Hybridization in Plants", sub: "(Page-4)" },
          { main: "Blending Inheritance", sub: "(Page-4)" },
          { main: "The Laws of Mendel", sub: "(Page-4)" },
          { main: "Cell and Cell Theory", sub: "(Page-4)" },
          { main: "Nucleus and Chromosome", sub: "(Page-5)" },
          { main: "Cytogenetics", sub: "(Page-5)" },
          { main: "Classical Genetics.", sub: "(Page-5)" },
          { main: "Biochemical Genetics", sub: "(Page-6)" },
          { main: "Molecular Genetics", sub: "(Page-6)" },
          { main: "Recombinant DNA Technology", sub: "(Page-7)" },
          { main: "Forward and Reverse Genetics", sub: "(Page-8)" },
          { main: "Epilogue", sub: "(Page-8)" },
          { main: "Genetics in India", sub: "(Page-8)" },
          { main: "CELL ULTRASTRUCTURE", sub: "(Page-10-22)" },
          { main: "Introduction.", sub: "(Page-10)" },
          { main: "Cell Wall", sub: "(Page-10)" },
          { main: "Middle Lamella", sub: "(Page-10)" },
          { main: "Primary Cell Wall", sub: "(Page-11)" },
          { main: "Secondary Cell Wall", sub: "(Page-11)" },
          { main: "Plasma Lemma", sub: "(Page-12)" },
          { main: "Models of Membrane Structure", sub: "(Page-12)" },
          { main: "Pinocytosis and Phagocytosis", sub: "(Page-13)" },
          { main: "Active and Passive Transports", sub: "(Page-13)" },
          { main: "Cytoplasm", sub: "(Page-13)" },
          { main: "Endoplasmic Reticulum", sub: "(Page-14)" },
          { main: "Ribosomes", sub: "(Page-15)" },
          { main: "Golgi Body", sub: "(Page-15)" },
          { main: "Lysosomes", sub: "(Page-16)" },
          { main: "Spherosome", sub: "(Page-16)" },
          { main: "Vacuoles", sub: "(Page-16)" },
          { main: "Peroxisomes", sub: "(Page-17)" },
          { main: "Centriole", sub: "(Page-17)" },
          { main: "Cytoskeleton", sub: "(Page-18)" },
          { main: "Mitochondria", sub: "(Page-18)" },
          { main: "Chloroplasts", sub: "(Page-19)" },
          { main: "Nucleus", sub: "(Page-21)" },
          { main: "Nuclear Envelope", sub: "(Page-21)" },
          { main: "Nucleolus", sub: "(Page-22)" },
          { main: "Chromatin Fibers", sub: "(Page-22)" },
          { main: "CHROMOSOMES", sub: "(Page-23-41)" },
          { main: "Introduction", sub: "(Page-23)" },
          { main: "Chromosome Number", sub: "(Page-23)" },
          { main: "Chromosome Size", sub: "(Page-25)" },
          { main: "Chromosome Morphology", sub: "(Page-25)" },
          { main: "Chromatid", sub: "(Page-26)" },
          { main: "Centromere", sub: "(Page-26)" },
          { main: "Telomere", sub: "(Page-28)" },
          { main: "Secondary Constriction", sub: "(Page-28)" },
          { main: "Chromomere", sub: "(Page-29)" },
          { main: "Karyotype.", sub: "(Page-29)" },
          { main: "Heterochromatin", sub: "(Page-30)" },
          { main: "Chemical Composition", sub: "(Page-31)" },
          { main: "DNA", sub: "(Page-31)" },
          { main: "RNA", sub: "(Page-33)" },
          { main: "Protein", sub: "(Page-33)" },
          { main: "Chromosome Structure.", sub: "(Page-33)" },
          {
            main: "Organization of Chromatin Fibers (Nucleosome-Solenoid Model)",
            sub: "(Page-34)",
          },
          { main: "Nucleosome Core", sub: "(Page-35)" },
          { main: "Linker DNA", sub: "(Page-35)" },
          { main: "H1 Histone", sub: "(Page-35)" },
          { main: "Other Chromosomal Proteins", sub: "(Page-36)" },
          { main: "Replication of Chromosomes", sub: "(Page-37)" },
          { main: "Special Chromosomes", sub: "(Page-38)" },
          { main: "Lampbrush Chromosomes", sub: "(Page-38)" },
          { main: "Giant Chromosomes", sub: "(Page-39)" },
          { main: "Accessory Chromosomes", sub: "(Page-40)" },
          { main: "Functions of Chromosomes.", sub: "(Page-41)" },
          { main: "CELL DIVISION", sub: "(Page-42-56)" },
          { main: "Introduction.", sub: "(Page-42)" },
          { main: "Functions of Cell Division", sub: "(Page-42)" },
          { main: "Prokaryotic (E. coli) Cell Division", sub: "(Page-42)" },
          { main: "Mitosis", sub: "(Page-44)" },
          { main: "Importance of Mitosis", sub: "(Page-44)" },
          { main: "Stages of Mitosis", sub: "(Page-44)" },
          { main: "Interphase", sub: "(Page-44)" },
          { main: "Prophase", sub: "(Page-46)" },
          { main: "Metaphase", sub: "(Page-47)" },
          { main: "Anaphase", sub: "(Page-47)" },
          { main: "Telophase", sub: "(Page-48)" },
          { main: "Cytokinesis.", sub: "(Page-48)" },
          { main: "Meiosis.", sub: "(Page-49)" },
          { main: "Significance of Meiosis", sub: "(Page-49)" },
          { main: "Stages of Meiosis.", sub: "(Page-49)" },
          { main: "Premeiotic Interphase", sub: "(Page-49)" },
          { main: "First Meiotic Division", sub: "(Page-50)" },
          { main: "First Prophase", sub: "(Page-50)" },
          { main: "First Metaphase", sub: "(Page-53)" },
          { main: "First Anaphase", sub: "(Page-53)" },
          { main: "First Telophase", sub: "(Page-54)" },
          { main: "Cytokinesis", sub: "(Page-54)" },
          { main: "Interphase", sub: "(Page-54)" },
          { main: "Second Meiotic Division", sub: "(Page-54)" },
          { main: "Second Prophase", sub: "(Page-54)" },
          { main: "Second Metaphase", sub: "(Page-54)" },
          { main: "Second Anaphase", sub: "(Page-54)" },
          { main: "Second Telophase", sub: "(Page-54)" },
          { main: "Cytokinesis", sub: "(Page-55)" },
          {
            main: "Differences between Mitosis and Meiosis.",
            sub: "(Page-55)",
          },
          { main: "REGULATION OF CELL CYCLE", sub: "(Page-57-68)" },
          { main: "Introduction.", sub: "(Page-57)" },
          { main: "Checkpoints", sub: "(Page-57)" },
          { main: "START", sub: "(Page-58)" },
          { main: "Initiations of M Phase", sub: "(Page-58)" },
          { main: "Quiescence", sub: "(Page-58)" },
          { main: "Other Checkpoints", sub: "(Page-58)" },
          { main: "Cell Division Cycle Genes", sub: "(Page-59)" },
          { main: "M Phase Kinase", sub: "(Page-59)" },
          { main: "Catalytic Subunit of M Phase Kinase", sub: "(Page-60)" },
          { main: "Cyclins", sub: "(Page-61)" },
          {
            main: "Activation and Inactivation of M Phase Kinase",
            sub: "(Page-62)",
          },
          { main: "Activation", sub: "(Page-63)" },
          { main: "Inactivation", sub: "(Page-64)" },
          {
            main: "Monitoring of Completeness of DNA Replication",
            sub: "(Page-64)",
          },
          { main: "Regulation of Cell Size", sub: "(Page-64)" },
          { main: "Monitoring of DNA Damage.", sub: "(Page-64)" },
          { main: "Targets of M Phase Kinase Action", sub: "(Page-66)" },
          { main: "Initiation of S Phase", sub: "(Page-67)" },
          { main: "Entry into M Phase", sub: "(Page-68)" },
          { main: "STRUCTURAL CHROMOSOMAL ABERRATIONS", sub: "(Page-69-83)" },
          { main: "Introduction", sub: "(Page-69)" },
          { main: "Structural Chromosomal Aberrations.", sub: "(Page-69)" },
          { main: "Origin of Structural Aberrations.", sub: "(Page-69)" },
          { main: "Deletion", sub: "(Page-72)" },
          { main: "Genetic Effects", sub: "(Page-72)" },
          { main: "Cytological Detection", sub: "(Page-73)" },
          { main: "Deletions in Prokaryotes", sub: "(Page-73)" },
          { main: "Deletions in Humans", sub: "(Page-74)" },
          { main: "Duplication", sub: "(Page-74)" },
          { main: "Origin", sub: "(Page-74)" },
          { main: "Cytology", sub: "(Page-75)" },
          { main: "Genetic Effects", sub: "(Page-75)" },
          { main: "Inversion", sub: "(Page-76)" },
          { main: "Origin", sub: "(Page-76)" },
          { main: "Detection", sub: "(Page-76)" },
          { main: "Types of Inversion", sub: "(Page-77)" },
          { main: "Crossing Over within Inversion Loop", sub: "(Page-78)" },
          { main: "Inversions in Natural Populations", sub: "(Page-79)" },
          { main: "Translocation", sub: "(Page-79)" },
          { main: "Genetic Effects", sub: "(Page-79)" },
          { main: "Chromosome Pairing", sub: "(Page-80)" },
          { main: "Chromosome Disjunction", sub: "(Page-80)" },
          { main: "Change in Chromosome Morphology", sub: "(Page-82)" },
          { main: "Translocations in Natural Populations", sub: "(Page-83)" },
        ]
      : category === "Plant Breeding"
      ? [
          { main: "IFFCO", sub: "Indian Farmers Fertiliser Cooperative" },
          { main: "KRIBHCO", sub: "Krishak Bharati Cooperative Limited" },
        ]
      : [
          { main: "Cytogenetics: An Overview", sub: "(Page-3-23)" },
          { main: "History Of Cytogenetics", sub: "(Page-4)" },
          { main: "Chromosomes And Their Structure", sub: "(Page-4)" },
          {
            main: "Chromosome Numbers: Symbols And Terminology",
            sub: "(Page-4)",
          },
          { main: "Karyotype Symmetry", sub: "(Page-6)" },
          { main: "Euchromatin And Heterochromatin", sub: "(Page-7)" },
          {
            main: "Banding Patterns For Identification Of Chromosomes",
            sub: "(Page-8)",
          },
          {
            main: "In Situ Hybridization (Ish) With Dna Probes",
            sub: "(Page-12)",
          },
          {
            main: "Fluorescence In Situ Hybridization (Fish)",
            sub: "(Page-14)",
          },
          {
            main: 'Genomic In Situ Hybridization Using "Genome Blocking"',
            sub: "(Page-15)",
          },
          { main: "Computer Assisted Chromosome Analysis", sub: "(Page-15)" },
          { main: "Flow Cytometry For Study Of Chromosomes", sub: "(Page-15)" },
          {
            main: "Special Types Of Chromosomes For Cytogenetic Studies",
            sub: "(Page-17)",
          },
          { main: "Lampbrush Chromosomes", sub: "(Page-17)" },
          { main: "Salivary Gland Chromosomes", sub: "(Page-17)" },
          { main: "B Chromosomes", sub: "(Page-18)" },
          { main: "Genetic, Cytogenetic And Physical Maps", sub: "(Page-20)" },
          {
            main: "Relation Between Chromosome Morphology And Genetic Maps",
            sub: "(Page-21)",
          },
          { main: "Chromosomes In Sex Determination", sub: "(Page-21)" },
          {
            main: "Chromosomes And Agamospermy (Apomictic Seed)",
            sub: "(Page-22)",
          },
          { main: "Molecular Cytogenetics/Cytogenomics", sub: "(Page-22)" },
          { main: "Cytogenomics", sub: "(Page-22)" },
          { main: "Structural Variations (SVs) In Genomes", sub: "(Page-23)" },
          {
            main: "Ancient Duplications And Palaeopolyploidy",
            sub: "(Page-23)",
          },
          { main: "Duplications And Deficiencies", sub: "(Page-24-47)" },
          { main: "Duplications", sub: "(Page-24)" },
          {
            main: "Origin, Occurrence And Production Of Duplications",
            sub: "(Page-24)",
          },
          {
            main: "Chromosome Pairing At Meiosis In Duplication Heterozygotes",
            sub: "(Page-26)",
          },
          {
            main: "Crossing Over In Duplication Heterozygotes",
            sub: "(Page-27)",
          },
          { main: "Phenotypic Effects Of Duplications", sub: "(Page-28)" },
          {
            main: "Bridge-Breakage-Fusion Cycle Due To Duplications In Corn",
            sub: "(Page-30)",
          },
          { main: "Duplications In Plant Breeding", sub: "(Page-30)" },
          { main: "Duplications In Evolution", sub: "(Page-30)" },
          { main: "Deficiencies", sub: "(Page-33)" },
          { main: "Types Of Deficiencies", sub: "(Page-34)" },
          { main: "Origin And Occurrence Of Deficiencies", sub: "(Page-34)" },
          {
            main: "Production Of Deficiencies Through Irradiation (X-Rays And Neutrons)",
            sub: "(Page-34)",
          },
          {
            main: "Production Of Deficiencies In Wheat Due To A Gametocidal Chromosome",
            sub: "(Page-35)",
          },
          {
            main: "Meiosis And Breeding Behaviour Of Deficiency Heterozygotes",
            sub: "(Page-35)",
          },
          {
            main: "Use Of Deficiencies For Chromosome Mapping",
            sub: "(Page-36)",
          },
          { main: "Genetics Of Deficiencies", sub: "(Page-40)" },
          {
            main: "Effects Of Duplications And Deficiencies On Crossing Over",
            sub: "(Page-45)",
          },
          {
            main: "Duplications And Deficiencies At The Molecular Level",
            sub: "(Page-46)",
          },

          { main: "Inversions", sub: "(Page-48-65)" },
          { main: "Types Of Inversions", sub: "(Page-49)" },
          {
            main: "Origin, Occurrence And Production Of Inversions",
            sub: "(Page-49)",
          },
          {
            main: "Meiotic Pairing In Inversion Heterozygotes",
            sub: "(Page-49)",
          },
          {
            main: "Cytological Crossing Over And Its Consequences In Inversion Heterozygotes",
            sub: "(Page-50)",
          },
          { main: "Pericentric Inversions", sub: "(Page-50)" },
          { main: "Paracentric Inversions", sub: "(Page-51)" },
          {
            main: "Sterility And Recombination In Inversion Heterozygotes",
            sub: "(Page-51)",
          },
          {
            main: "Identification Of Paracentric Inversions",
            sub: "(Page-54)",
          },
          {
            main: "Behaviour Of Bridge And Fragment In Paracentric Inversion Heterozygotes",
            sub: "(Page-55)",
          },
          {
            main: "Prediction Of Pollen Abortion From Meiosis And Breeding Behaviour Of Inversion Heterozygotes",
            sub: "(Page-56)",
          },
          {
            main: "Location Of Chromosome Breakpoints In Inversions",
            sub: "(Page-57)",
          },
          { main: "Cytological Methods", sub: "(Page-57)" },
          { main: "Genetic Methods", sub: "(Page-57)" },
          { main: "Genetics Of Inversions", sub: "(Page-58)" },
          { main: "Included And Overlapping Inversions", sub: "(Page-58)" },
          { main: "Included Inversions", sub: "(Page-58)" },
          { main: "Overlapping Inversions", sub: "(Page-59)" },
          { main: "Inter-Chromosomal Effects Of Inversions", sub: "(Page-59)" },
          {
            main: "Role Of Inversions In Evolution And Karyotype Reconstruction",
            sub: "(Page-61)",
          },
          { main: "Inversions In Drosophila", sub: "(Page-61)" },
          { main: "Inversions In Plants", sub: "(Page-63)" },
          { main: "Inversions At The Molecular Level", sub: "(Page-64)" },

          { main: "Interchanges", sub: "(Page-66-92)" },
          {
            main: "Occurrence Of Interchanges In Nature: Early History",
            sub: "(Page-66)",
          },
          {
            main: "Natural Origin And Artificial Induction Of Interchanges",
            sub: "(Page-67)",
          },
          { main: "Cytological Behaviour Of Interchanges", sub: "(Page-67)" },
          { main: "Chromosome Association At Meiosis", sub: "(Page-67)" },
          { main: "Orientation Of Interchange Quadrivalent", sub: "(Page-69)" },
          {
            main: "Crossing Over In Interchange Heterozygotes",
            sub: "(Page-70)",
          },
          {
            main: "Interchange Heterozygotes With Low Sterility",
            sub: "(Page-72)",
          },
          {
            main: "Breeding Behaviour Of Interchange Heterozygotes",
            sub: "(Page-73)",
          },
          { main: "Detection Of Interchanges", sub: "(Page-74)" },
          {
            main: "Identification Of Chromosomes Involved In Interchanges",
            sub: "(Page-74)",
          },
          {
            main: "Linkage Of Semisterility With Two Linkage Groups",
            sub: "(Page-74)",
          },
          {
            main: "Linkage Relations In Interchange Stocks Vs. Normal Stocks",
            sub: "(Page-76)",
          },
          {
            main: "Pachytene Analysis In Interchange Heterozygotes",
            sub: "(Page-77)",
          },
          { main: "Karyotypes In Interchange Stocks", sub: "(Page-77)" },
          { main: "Use Of Trisomic Sets", sub: "(Page-77)" },
          { main: "Intercross Method", sub: "(Page-78)" },
          {
            main: "Use Of Monosomics And Double Monotelodisomics In Wheat And Cotton",
            sub: "(Page-78)",
          },
          { main: "Induced Interchanges", sub: "(Page-78)" },
          { main: "Translocation Tester Sets", sub: "(Page-79)" },
          {
            main: "Oenothera Method Of Gamete Selection And Synthesis Of Complex Translocation Rings",
            sub: "(Page-80)",
          },
          {
            main: "Localization Of Genes Using Interchanges",
            sub: "(Page-81)",
          },
          {
            main: "Linkage Between Marker Genes And Semi-Sterility (Interchange Breakpoints)",
            sub: "(Page-81)",
          },
          { main: "Use Of Simple B-A Translocations", sub: "(Page-82)" },
          {
            main: "Origin And Occurrence Of Interchanges In Nature",
            sub: "(Page-84)",
          },
          {
            main: "Interchange Homozygosity In Datura Races And Wheat Varieties",
            sub: "(Page-84)",
          },
          {
            main: "Permanent Hybrids In Oenothera And Other Genera",
            sub: "(Page-85)",
          },
          {
            main: "Interchange Heterozygosity And Permanent Hybrids In Oenothera",
            sub: "(Page-85)",
          },
          {
            main: "Large Rings In Other Genera Of Onagraceae",
            sub: "(Page-89)",
          },
          { main: "Large Rings In Other Families", sub: "(Page-90)" },
          { main: "Robertsonian Translocations", sub: "(Page-90)" },
          { main: "Interchanges At The Molecular Level", sub: "(Page-90)" },
          { main: "Haploidy In Higher Plants", sub: "(Page-93-112)" },
          {
            main: "Terminology And Classification Of Haploids",
            sub: "(Page-93)",
          },
          {
            main: "Origin, Occurrence And Production Of Haploids",
            sub: "(Page-94)",
          },
          {
            main: "Production Of Haploids Through Parthenogenesis And Apogamy",
            sub: "(Page-94)",
          },
          {
            main: "Production Of Haploids Through Chromosome Elimination",
            sub: "(Page-97)",
          },
          {
            main: "Production Of Haploids Through Anther And Microspore Culture",
            sub: "(Page-101)",
          },
          {
            main: "Production Of Haploids Through Ovule Culture",
            sub: "(Page-101)",
          },
          { main: "Haploid Inducing/Doubling Genes", sub: "(Page-102)" },
          {
            main: "Haploid Inducing Genes With Genome Doubling Activity",
            sub: "(Page-103)",
          },
          {
            main: "Haploid Inducer (Hi) Line (Stock6) In Maize",
            sub: "(Page-103)",
          },
          {
            main: "Haploid-Inducer Mediated Genome Editing (Imge)",
            sub: "(Page-104)",
          },
          { main: "Detection Of Haploids", sub: "(Page-104)" },
          { main: "Morphology", sub: "(Page-104)" },
          { main: "Genetic Markers", sub: "(Page-104)" },
          { main: "Phenotypic Effects Of Haploidy", sub: "(Page-105)" },
          {
            main: "Meiosis And Breeding Behaviour Of Haploids",
            sub: "(Page-105)",
          },
          {
            main: "Meiosis In Haploids (Monoploids And Polyhaploids)",
            sub: "(Page-105)",
          },
          {
            main: "Breeding Behaviour: Progenies From Crosses Involving Monoploids Or Polyhaploids",
            sub: "(Page-106)",
          },
          { main: "Uses Of Haploids In Plant Breeding", sub: "(Page-106)" },
          {
            main: "Use Of Haploids In Species With Disomic Inheritance",
            sub: "(Page-106)",
          },
          {
            main: "Use Of Haploids In Species With Polysomic Inheritance",
            sub: "(Page-108)",
          },
          { main: "Limitations Of Haploid Breeding", sub: "(Page-110)" },
          { main: "Use Of Haploids In Mutation Research", sub: "(Page-110)" },
          {
            main: "Use Of Haploids In Cytogenetics",
            sub: "(Page-Research 110)",
          },
          { main: "Use Of Haploids In Genetic Studies", sub: "(Page-111)" },
          {
            main: "Use Of Haploids In Evolutionary Studies",
            sub: "(Page-111)",
          },
          { main: "Problems", sub: "(Page-112)" },
          {
            main: "Polyploidy In Higher Plants: 1. Autopolyploidy",
            sub: "(Page-113-135)",
          },
          {
            main: "Origin And Occurrence Of Autopolyploids In Nature",
            sub: "(Page-114)",
          },
          { main: "Induced Autopolyploidy", sub: "(Page-114)" },
          { main: "Colchicine Treatment", sub: "(Page-114)" },
          {
            main: "Other Methods Including Use Of Physical Agents",
            sub: "(Page-116)",
          },
          {
            main: "Phenotypic Effects Of Autopolyploidy (Morphological And Physiological)",
            sub: "(Page-117)",
          },
          { main: "Meiotic Behaviour In Autopolyploids", sub: "(Page-118)" },
          {
            main: "Multivalent Formation And Anaphase Disjunction",
            sub: "(Page-118)",
          },
          {
            main: "Improvement Of Meiotic Stability And Fertility By Selection",
            sub: "(Page-119)",
          },
          { main: "Breeding Behaviour Of Autopolyploids", sub: "(Page-120)" },
          {
            main: "Aneuploids In The Progeny Of Autopolyploids",
            sub: "(Page-120)",
          },
          {
            main: "Maternal Diploids In The Progeny Of Autotetraploids",
            sub: "(Page-121)",
          },
          { main: "Genetics Of Autopolyploids", sub: "(Page-121)" },
          {
            main: "Double Reduction In Autopolyploids Monohybrid (Single Gene) Ratios In Autopolyploids (Polysomic Ratios) Dihybrid And Trihybrid Ratios (Involving 2 Or 3 Genes) In Autopolyploids",
            sub: "(Page-122-129)",
          },
          {
            main: "Segregation Ratios In Terms Of Double Reduction Frequency",
            sub: "(Page-129)",
          },
          {
            main: "Analysis Of Genetic Data In Autotetraploids",
            sub: "(Page-133)",
          },
          {
            main: "Rate Of Achieving Homozygosity In Autotetraploids",
            sub: "(Page-134)",
          },
          {
            main: "Polyploidy In Higher Plants: 2. Allopolyploidy And Genome Analysis",
            sub: "(Page-136-156)",
          },
          {
            main: "Criteria For Distinction Between Autopolyploids And Allopolyploids",
            sub: "(Page-137)",
          },
          { main: "External Morphology", sub: "(Page-137)" },
          { main: "Biochemical Studies", sub: "(Page-137)" },
          {
            main: "Cytological Studies (Mitosis And Meiosis)",
            sub: "(Page-138)",
          },
          { main: "Genetic Studies", sub: "(Page-139)" },
          { main: "Allopolyploidization Of Autopolyploids", sub: "(Page-139)" },
          { main: "Subgenome Analysis In Allopolyploids", sub: "(Page-140)" },
          { main: "Evolution Of Allotetraploid Gossypium", sub: "(Page-140)" },
          { main: "Evolution Of Allotetraploid Nicotiana", sub: "(Page-142)" },
          { main: "Evolution Of Allopolyploid Triticum", sub: "(Page-144)" },
          {
            main: "Evolution Of Potato And Other Related Solanum Species",
            sub: "(Page-148)",
          },
          { main: "Evolution Within The Genus Brassica", sub: "(Page-150)" },
          {
            main: "Evolution Of Allotetraploid Arachis Hypogea (Groundnut)",
            sub: "(Page-151)",
          },
          {
            main: "Synthesis Of New Genera And Species Using Allopolyploidy",
            sub: "(Page-152)",
          },
          { main: "Raphanobrassica And X Brassicoraphanus", sub: "(Page-153)" },
          { main: "Galeopsis Tetrahit", sub: "(Page-153)" },
          { main: "Primula Kewensis", sub: "(Page-154)" },
          { main: "Aegilotricus", sub: "(Page-154)" },
          { main: "Agrotricum", sub: "(Page-154)" },
          {
            main: "Triticale (Xtriticosecale): A New Man Made Cereal",
            sub: "(Page-154)",
          },
          {
            main: "Polyploidy In Higher Plants: 3. Triploidy For Seedless Fruits (Including Triploidy In Animals)",
            sub: "(Page-204-226)",
          },
          {
            main: "Meiosis, Fertility And Breeding Behaviour Of Triploids",
            sub: "(Page-157)",
          },
          {
            main: "Occurrence And Artificial Production Of Triploids",
            sub: "(Page-158)",
          },
          { main: "Triploid Fruits And Ornamentals", sub: "(Page-158)" },
          { main: "Triploid Poplar, Oak And Aspen Trees", sub: "(Page-163)" },
          {
            main: "Triploid Ornamentals And Forage Grasses",
            sub: "(Page-163)",
          },
          {
            main: "Triploidy In Animals (Newts, Salmon, And Grass Carp)",
            sub: "(Page-165)",
          },
          { main: "Triploid Syndromes In Humans", sub: "(Page-165)" },
          {
            main: "Aneuploidy: 1. Trisomics And Tetrasomics (Hyperploids)",
            sub: "(Page-167-203)",
          },
          { main: "Classification Of Aneuploids", sub: "(Page-167)" },
          {
            main: "Aneuploids In Diploids Vs. Aneuploids In Polyploids",
            sub: "(Page-167)",
          },
          { main: "Trisomics In Diploids", sub: "(Page-168)" },
          { main: "History Of Trisomics", sub: "(Page-168)" },
          {
            main: "Terminology And Classification Of Trisomics",
            sub: "(Page-168)",
          },
          { main: "Origin And Sources Of Trisomics", sub: "(Page-170)" },
          {
            main: "Characterization And Identification Of Trisomics",
            sub: "(Page-180)",
          },
          { main: "Meiotic Behaviour In Trisomics", sub: "(Page-184)" },
          {
            main: "Transmission Of Extra Chromosome And Breeding Behaviour Of Trisomics",
            sub: "(Page-188)",
          },
          { main: "Use Of Trisomics In Chromosome Mapping", sub: "(Page-189)" },
          {
            main: "Balanced Tertiary Trisomics For Hybrid Seed Production",
            sub: "(Page-194)",
          },
          {
            main: "Haplo-Viable Mutants (A Substitute For Btts) For Hybrid Seed Production",
            sub: "(Page-199)",
          },
          { main: "Trisomics In Polyploid Crops", sub: "(Page-201)" },
          { main: "Trisomics In Humans", sub: "(Page-201)" },
          {
            main: "Triplo-21 Or G Trisomy Or Down's Syndrome",
            sub: "(Page-201)",
          },
          { main: "Triplo-18 Or E Trisomy", sub: "(Page-202)" },
          { main: "Triple-13 Or D Trisomy", sub: "(Page-202)" },
          { main: "Triple-22", sub: "(Page-202)" },
          { main: "Trisomics For Sex Chromosomes", sub: "(Page-202)" },
          { main: "Tertiary Trisomics", sub: "(Page-202)" },
          { main: "Tetrasomics In Plants", sub: "(Page-203)" },
          {
            main: "Aneuploidy: 2. Monosomics And Nullisomics (Hypoploids)",
            sub: "(Page-204-226)",
          },
          { main: "Monosomics In Polyploids", sub: "(Page-205)" },
          { main: "Methods Of Production Of Monosomics", sub: "(Page-205)" },
          {
            main: "Description And Identification Of Monosomics",
            sub: "(Page-207)",
          },
          { main: "Meiotic Behaviour Of Monosomics", sub: "(Page-211)" },
          {
            main: "Breeding Behaviour Of Monosomics (Transmission Of Monosomic Condition)",
            sub: "(Page-211)",
          },
          {
            main: "Production Of A Monosomic Series In A New Variety",
            sub: "(Page-211)",
          },
          { main: "Checking The Identity Of Monosomics", sub: "(Page-212)" },
          {
            main: "Locating Genes On Chromosomes In Polyploid Crops",
            sub: "(Page-212)",
          },
          { main: "Locating Genes On Chromosome Arms", sub: "(Page-216)" },
          { main: "Chromosome Mapping", sub: "(Page-219)" },
          { main: "Physical Map Of Individual Chromosomes", sub: "(Page-220)" },
          { main: "Nullisomics In Polyploids", sub: "(Page-221)" },
          {
            main: "Methods And Sources Of Production Of Nullisomics",
            sub: "(Page-221)",
          },
          { main: "Identification Of Nullisomics", sub: "(Page-223)" },
          { main: "Meiotic Behaviour In Nullisomics", sub: "(Page-223)" },
          { main: "Breeding Behaviour Of Nullisomics", sub: "(Page-224)" },
          {
            main: "Use Of Nullisomics In Locating Genes On Chromosomes",
            sub: "(Page-224)",
          },
          { main: "Monosomics In Diploids", sub: "(Page-224)" },
          { main: "Monosomics In Tomato", sub: "(Page-225)" },
          { main: "Monosomics In Maize", sub: "(Page-225)" },
          {
            main: "Alien Gene Transfer Through Chromosome Manipulations",
            sub: "(Page-227-247)",
          },
          { main: "Transfer Of Whole Genome", sub: "(Page-227)" },
          { main: "Transfer Of Genome To 4x And 6x Wheats", sub: "(Page-227)" },
          {
            main: "Transfer Of Genome In The Genus Arachis",
            sub: "(Page-228)",
          },
          {
            main: "Transfer Of Genome In Brassica-Raphanus Group",
            sub: "(Page-229)",
          },
          {
            main: "Transfer Of Genome In Festuca-Loliutn Complex",
            sub: "(Page-230)",
          },
          {
            main: "Genome Reconstruction Within The Triticinae",
            sub: "(Page-230)",
          },
          {
            main: "Transfer Of Individual Whole Chromosomes",
            sub: "(Page-230)",
          },
          { main: "Alien Addition Lines", sub: "(Page-231)" },
          { main: "Alien Substitution Lines", sub: "(Page-237)" },
          {
            main: "Substitution Of Alien Chromosome Arms (Robertsonian Translocations)",
            sub: "(Page-239)",
          },
          {
            main: "Interchanges For Transfer Of Alien Segments",
            sub: "(Page-240)",
          },
          { main: "Interchanges Using Irradiation", sub: "(Page-240)" },
          { main: "Interchanges Through Recombination", sub: "(Page-241)" },
          { main: "Markers For Alien Chromatin", sub: "(Page-246)" },
          {
            main: "Cytogenetics Of Sex Determination And Sex Differentiation",
            sub: "(Page-248-274)",
          },
          {
            main: "Chromosomal/Genotypic Sex Determination (Csd/Gsd)",
            sub: "(Page-249)",
          },
          { main: "Chromosome Theory Of Sex Determination", sub: "(Page-249)" },
          {
            main: "Genic Balance Theory Of Sex Determination",
            sub: "(Page-249)",
          },
          { main: "Environmental Sex Determination (Esd)", sub: "(Page-257)" },
          { main: "Temperature Control Of Sex", sub: "(Page-257)" },
          { main: "Hormonal Control Of Sex", sub: "(Page-258)" },
          {
            main: "Sex Chromosomes In Mammals Including Humans (Homo Sapiens)",
            sub: "(Page-260)",
          },
          { main: "Cytogenetic Basis Of Apomixis", sub: "(Page-275-288)" },
          { main: "Occurrence Of Apomixis", sub: "(Page-276)" },
          { main: "Classification And Terminology", sub: "(Page-276)" },
          { main: "Detection Of Apomixis", sub: "(Page-277)" },
          { main: "Cytology And Embryology Of Apomicts", sub: "(Page-279)" },
          {
            main: "Association Of Apomixis With Aberrant Meiosis And Polyploidy",
            sub: "(Page-279)",
          },
          {
            main: "4-Nucleate Aposporic Embryo Sacs In Grasses",
            sub: "(Page-280)",
          },
          {
            main: "8-Nucleate Aposporic Embryo Sacs In Some Grasses",
            sub: "(Page-280)",
          },
          { main: "Genetic Basis Of Apomixis", sub: "(Page-281)" },
          { main: "Known Genes For Apomixis", sub: "(Page-282)" },
          {
            main: "Work Done On Genetics Of Apomixis In India",
            sub: "(Page-283)",
          },
          { main: "Sex Reversal In Mammals (Xxxy 오)", sub: "(Page-260)" },
          { main: "Sex Determination In Plants", sub: "(Page-262)" },
          {
            main: "Mechanism Of Sex Determination In Plants",
            sub: "(Page-263)",
          },
          {
            main: "Methods For Determining Heterogametic Sex In Plants",
            sub: "(Page-268)",
          },
          { main: "Dosage Compensation", sub: "(Page-270)" },
          { main: "Organisms With Heterogametic Sex", sub: "(Page-270)" },
          { main: "Organisms With Heterogametic Females", sub: "(Page-272)" },
          { main: "Dosage Compensation In Plants", sub: "(Page-272)" },
          { main: "Genetic Imprinting", sub: "(Page-272)" },
          {
            main: "Apomixis In Some Specific Agamic Complexes",
            sub: "(Page-283)",
          },
          {
            main: "Apomixis In Dichanthium-Bothriochloa- Capillipedium Complex And Related Grasses",
            sub: "(Page-283)",
          },
          { main: "Apomixis In Poa Agamic Complex", sub: "(Page-284)" },
          { main: "Apomixis In Potentilla", sub: "(Page-284)" },
          { main: "Apomixis In Blumea", sub: "(Page-284)" },
          { main: "Apomixis In Crepis Agamic Complex", sub: "(Page-285)" },
          { main: "Apomixis In Taraxacum", sub: "(Page-285)" },
          { main: "Apomixis, Hybridization And Polyploidy", sub: "(Page-285)" },
          { main: "Apomixis, Environment And Adaptation", sub: "(Page-286)" },
          { main: "Apomixis In Plant Breeding", sub: "(Page-287)" },
          {
            main: "Nuclear DNA Content And Its Organization",
            sub: "(Page-291-317)",
          },
          {
            main: "Nuclear DNA Content And C Value Paradox",
            sub: "(Page-292)",
          },
          { main: "C-Value Paradox", sub: "(Page-293)" },
          {
            main: "Nuclear DNA Vs Chromosome Length/Area/Volume",
            sub: "(Page-294)",
          },
          { main: "Nuclear DNA Vs G/C-Bands", sub: "(Page-294)" },
          { main: "DNA Contents In Related Species", sub: "(Page-294)" },
          { main: "DNA Content And Polyploidy", sub: "(Page-295)" },
          { main: "Chromosomal DNA And Evolution", sub: "(Page-295)" },
          {
            main: "DNA Content (Genome Size) And Adaptability",
            sub: "(Page-295)",
          },
          {
            main: "Repetitive DNA Technique For Detecting Repetitive DNA",
            sub: "(Page-296)",
          },
          {
            main: "Chemical Complexity Vs. Sequence (Kinetic) Complexity",
            sub: "(Page-298)",
          },
          {
            main: "Interspersion Of Repetitive And Single Copy Sequences",
            sub: "(Page-300)",
          },
          { main: "The Nucleosome: Sub-Unit Of Chromatin", sub: "(Page-304)" },
          { main: "Basic Structure Of A Nucleosome", sub: "(Page-304)" },
          { main: "Core Particle", sub: "(Page-304)" },
          { main: "Spatial Arrangement Of Histones", sub: "(Page-306)" },
          {
            main: "Relation Between Different Nucleosomes (Chromatosome Or Chromatin Particle)",
            sub: "(Page-307)",
          },
          {
            main: "Folding Of Nucleosome Arrays (Solenoid Model)",
            sub: "(Page-308)",
          },
          {
            main: "Loops, Domains And Scaffolds In Chromatin",
            sub: "(Page-308)",
          },
          {
            main: "Chromatin Replication And Nucleosome Assembly",
            sub: "(Page-309)",
          },
          {
            main: "Phasing And Modification Of Nucleosomes In Active Genes",
            sub: "(Page-309)",
          },
          { main: "Split Genes Or Interrupted Genes", sub: "(Page-313)" },
          { main: "Exons And Introns", sub: "(Page-313)" },
          { main: "Discovery Of Split Genes", sub: "(Page-314)" },
          {
            main: "R-Loop Mapping And Restriction Mapping Of Interrupted Genes",
            sub: "(Page-315)",
          },
          {
            main: "Structure Of Chicken Ovalbumin Split Gene",
            sub: "(Page-317)",
          },

          { main: "DNA-Based Molecular Markers", sub: "(Page-318-330)" },
          { main: "Development Of Markers (1980-2020)", sub: "(Page-318)" },
          {
            main: "First Generation Markers: RFLPs And RAPDs",
            sub: "(Page-319)",
          },
          {
            main: "Second-Generation Markers: SSR/STR, AFLP, STS",
            sub: "(Page-321)",
          },
          {
            main: "Third Generation Markers: SNPs (Single Nucleotide Polymorphisms)",
            sub: "(Page-324)",
          },
          {
            main: "Fourth Generation Markers: Array-Based Markers (SNPs, DArT)",
            sub: "(Page-325)",
          },
          {
            main: "Fifth Generation Markers: ISBP, CNV And PAV Markers",
            sub: "(Page-329)",
          },
          { main: "Uses Of Molecular Markers", sub: "(Page-330)" },
          { main: "Diagnostics, Forensics And MAS", sub: "(Page-330)" },
          { main: "Construction Of Molecular Maps", sub: "(Page-330)" },
          { main: "Evolutionary Studies", sub: "(Page-330)" },

          {
            main: "Genetic, Cytogenetic And Physical Maps Involving DNA Markers",
            sub: "(Page-331-361)",
          },
          {
            main: "What Are Genetic, Cytogenetic And Physical Maps?",
            sub: "(Page-331)",
          },
          { main: "Mapping Populations", sub: "(Page-332)" },
          { main: "Mapping Panels In Humans", sub: "(Page-333)" },
          { main: "Mapping Populations In Animals", sub: "(Page-333)" },
          { main: "Mapping Populations In Plants", sub: "(Page-333)" },
          { main: "Genetic Maps", sub: "(Page-334)" },
          { main: "Approaches For Genetic Mapping", sub: "(Page-335)" },
          {
            main: "Computer Software For Construction Of Genetic Maps",
            sub: "(Page-335)",
          },
          { main: "Genetic Maps Already Developed", sub: "(Page-335)" },
          { main: "Cytogenetic Maps", sub: "(Page-343)" },
          {
            main: "Cytogenetic Maps Using Chromosome Specific Markers",
            sub: "(Page-343)",
          },
          { main: "Physical Maps", sub: "(Page-345)" },
          {
            main: "Top Down (Restriction Mapping) Vs. Bottom Up (Contig Mapping) Approaches",
            sub: "(Page-345)",
          },
          {
            main: "Physical Maps Of Human Genes Using Deletions",
            sub: "(Page-346)",
          },
          {
            main: "Physical Maps Of Wheat Genome Using Aneuploid And Deletion Stocks",
            sub: "(Page-346)",
          },
          {
            main: "Physical Maps Using In Situ Hybridization (Work)",
            sub: "(Page-347)",
          },
          { main: "Physical Maps Using FISH", sub: "(Page-349)" },
          {
            main: "Physical Maps By Chromosome Fragmentation",
            sub: "(Page-350)",
          },
          {
            main: "Physical Mapping Of Chromosome Ends Using Telomeric DNA Fragments",
            sub: "(Page-351)",
          },
          {
            main: "Physical Maps Using Radiation Hybrids (RHS)",
            sub: "(Page-351)",
          },
          { main: "Physical Maps Using Happy Mapping", sub: "(Page-354)" },
          { main: "BAC-Based Physical Mapping", sub: "(Page-355)" },
          { main: "Physical Maps Using Optical Mapping", sub: "(Page-356)" },
          {
            main: "Physical Mapping By Chromatin Contacts (Hi-C)",
            sub: "(Page-360)",
          },

          {
            main: "Linkage-Based QTL Mapping (Single Marker Analysis And Interval Mapping)",
            sub: "(Page-362-379)",
          },
          { main: "Single Marker Analysis (SMA)", sub: "(Page-362)" },
          { main: "Genetic Model For SMA", sub: "(Page-363)" },
          {
            main: "SMA Using Joint Segregation Of Marker And QTL Loci",
            sub: "(Page-363)",
          },
          { main: "Bulked Segregant Analysis (BSA)", sub: "(Page-368)" },
          { main: "Statistical Model", sub: "(Page-369)" },
          {
            main: "Statistical Significance (Type I And Type II Errors)",
            sub: "(Page-369)",
          },
          { main: "Advantages And Disadvantages Of SMA", sub: "(Page-370)" },
          { main: "Interval Mapping", sub: "(Page-370)" },
          { main: "Simple Interval Mapping (SIM)", sub: "(Page-371)" },
          { main: "Composite Interval Mapping (CIM)", sub: "(Page-373)" },
          {
            main: "Two-Locus Analysis (QTls Involved In Epistasis)",
            sub: "(Page-376)",
          },
          {
            main: "Multiple Interval Mapping (MIM) Using QTL Cartographer",
            sub: "(Page-376)",
          },
          {
            main: "QTLmapper And QTL Network For Epistatic QTL",
            sub: "(Page-376)",
          },
          { main: "Mapping QTls In Multiple Environments", sub: "(Page-376)" },
          { main: "Nature And Size Of Mapping Populations", sub: "(Page-377)" },
          { main: "Nature Of Mapping Population", sub: "(Page-377)" },
          { main: "Size Of Mapping Population", sub: "(Page-377)" },
          {
            main: "The Beavis Effect (Power And Repeatability Of QTls)",
            sub: "(Page-377)",
          },
          { main: "Other Methods Of QTL Mapping", sub: "(Page-378)" },
          { main: "Bayesian Approach", sub: "(Page-378)" },
          { main: "AB-QTL Analysis", sub: "(Page-378)" },
          {
            main: "QTL Analysis For Continuous QTs Vs Binary/Ordinal QTs",
            sub: "(Page-378)",
          },
          { main: "Software For QTL Analysis", sub: "(Page-378)" },
          {
            main: "Linkage Disequilibrium (Ld) And Association Mapping",
            sub: "(Page-380-393)",
          },
          { main: "Linkage Disequilibrium (Ld)", sub: "(Page-380)" },
          {
            main: "Detection And Estimation Of Ld (Two-Locus Methods)",
            sub: "(Page-381)",
          },
          { main: "Ld And Recombination", sub: "(Page-382)" },
          { main: "Testing Significance Of Ld", sub: "(Page-383)" },
          { main: "Two Ways To Visualize Or Depict Ld", sub: "(Page-384)" },
          { main: "Factors Affecting Ld", sub: "(Page-385)" },
          { main: "Association Mapping", sub: "(Page-385)" },
          {
            main: "Observational Studies (Population-Based Association Studies)",
            sub: "(Page-385)",
          },
          { main: "Genome-Wide Association Studies (Gwas)", sub: "(Page-386)" },

          {
            main: "High Resolution Mapping And Map-Based Cloning Of Qtls",
            sub: "(Page-394-406)",
          },
          { main: "What Is High Resolution Mapping?", sub: "(Page-394)" },
          { main: "Methods For High Resolution Mapping", sub: "(Page-395)" },
          {
            main: "Requirements For High Resolution Mapping",
            sub: "(Page-395)",
          },
          {
            main: "Selective Recombinant Genotyping (Srg) For High Resolution Mapping",
            sub: "(Page-395)",
          },
          {
            main: "Populations Used For High Resolution Mapping Using Recombinant Lines",
            sub: "(Page-395)",
          },
          {
            main: "High Resolution Qtl Mapping: Sliding Window Approach",
            sub: "(Page-400)",
          },
          { main: "Map-Based Cloning Of Qtl", sub: "(Page-400)" },
          { main: "Requirements For Map-Based Cloning", sub: "(Page-401)" },
          {
            main: "Different Approaches For Identification Of Clones For Map-Based Cloning",
            sub: "(Page-402)",
          },
          { main: "Cloned Qtls In Crops", sub: "(Page-404)" },
          {
            main: "Functional Complementation Of Isolated Genes",
            sub: "(Page-404)",
          },

          { main: "Dna Sequencing Technologies", sub: "(Page-407-419)" },
          { main: "First Generation Dna Sequencing", sub: "(Page-407)" },
          {
            main: "Maxam And Gilbert's Chemical Degradation Method",
            sub: "(Page-408)",
          },
          {
            main: "Sanger's Dideoxynucleotide Synthetic Method",
            sub: "(Page-409)",
          },
          { main: "Automatic Dna Sequencers", sub: "(Page-410)" },
          {
            main: "Second Generation Sequencing (Short Read Sequencing)",
            sub: "(Page-411)",
          },
          {
            main: "Third Generation Sequencing (Long Read Sequencing)",
            sub: "(Page-415)",
          },
          { main: "Sequencing By Synthesis (Sbs)", sub: "(Page-415)" },
          {
            main: "Nanopore Sequencing (Several Approaches)",
            sub: "(Page-416)",
          },

          {
            main: "Cytogenomics: 1. Whole Genome Sequencing (Wgs)",
            sub: "(Page-420-440)",
          },
          { main: "Methods For Whole Genome Sequencing", sub: "(Page-421)" },
          {
            main: "'Map First Sequence Later' Or 'Clone By Clone' Strategy ('Hierarchical Shotgun Sequencing')",
            sub: "(Page-421)",
          },
          { main: "Whole-Genome Shotgun (Wgs) Sequencing", sub: "(Page-421)" },
          { main: "Reference Genomes", sub: "(Page-422)" },
          { main: "From Whole Genomes To Pan-Genomes", sub: "(Page-422)" },
          { main: "Methods For Development Of Pan-Genomes", sub: "(Page-423)" },
          { main: "Human Genome", sub: "(Page-423)" },
          { main: "The 1000 Genome Project And Igsr", sub: "(Page-425)" },
          { main: "Gnomad (Including Exac)", sub: "(Page-425)" },
          {
            main: "Human Heredity And Health Africa (H3africa)",
            sub: "(Page-426)",
          },
          { main: "Indigenome Project Of Csir In India", sub: "(Page-426)" },
          { main: "Genome India Project", sub: "(Page-426)" },
          { main: "Human Pan-Genome", sub: "(Page-427)" },
          { main: "Personal Genomics", sub: "(Page-427)" },
          { main: "Cost Of Sequencing A Human Genome", sub: "(Page-428)" },
          { main: "Ethical Issues In Personal Genomics", sub: "(Page-428)" },
          {
            main: "Bacterial Genes Transferred To Human Genome",
            sub: "(Page-429)",
          },
          { main: "Human Microbiome: Our Second Genome", sub: "(Page-429)" },
          { main: "Non-Human Animal Genomes", sub: "(Page-429)" },
          { main: "Pan-Genomes Of Animals", sub: "(Page-429)" },
          {
            main: "Genome Of Some Model Animals And Primates",
            sub: "(Page-430)",
          },
          {
            main: "Comparison Of Genomes Of Chimpanzee And Macaque With Human Genome",
            sub: "(Page-432)",
          },
          {
            main: "Genomes Of Other Animals (Sequenced During 2000-2015)",
            sub: "(Page-432)",
          },
          {
            main: "Genome Similarity, Evolution And Divergence Among Animals Including Humans",
            sub: "(Page-434)",
          },
          { main: "Major Animal Genome Projects", sub: "(Page-434)" },
          { main: "Plant Genomes", sub: "(Page-435)" },
          { main: "Genomes Of Horticultural Plants", sub: "(Page-436)" },
          { main: "1000 Plant (1kp) Genomes Project", sub: "(Page-436)" },
          { main: "10,000 Plant (10kp) Project", sub: "(Page-436)" },
          {
            main: "Pan-Genomes And Super Pan-Genomes In Plant Sequenced (2014-2020)",
            sub: "(Page-436)",
          },
          { main: "Earth Biogenome Project (Ebp)", sub: "(Page-437)" },
          {
            main: "Indian Initiative To Sequences Animal And Plant Genomes",
            sub: "(Page-437)",
          },
          { main: "Comparative Genomics", sub: "(Page-437)" },
          {
            main: "Homology, Orthology And Paralogy Among Genome Sequences",
            sub: "(Page-437)",
          },
          {
            main: "Methods Used For Inferring Orthology Vs Paralogy",
            sub: "(Page-438)",
          },
          {
            main: "Cytogenomics: Structural Variations (SVs)",
            sub: "(Page-441-456)",
          },
          { main: "What Are SVs?", sub: "(Page-441)" },
          { main: "History Of SVs", sub: "(Page-442)" },
          { main: "Types Of SVs", sub: "(Page-442)" },
          { main: "Deletions And Duplications", sub: "(Page-442)" },
          {
            main: "Balanced Rearrangements (Inversions And Interchanges)",
            sub: "(Page-445)",
          },
          { main: "CNVs And PAVs", sub: "(Page-445)" },
          { main: "Computational Methods", sub: "(Page-448)" },
          {
            main: "Methods For Detection And Characterization Of SVs",
            sub: "(Page-445)",
          },
          {
            main: "Experimental Methods For Detection Of SVs",
            sub: "(Page-446)",
          },
          { main: "Uses Of SVs", sub: "(Page-454)" },
          { main: "Sequencing-Based SVs For GWAS", sub: "(Page-454)" },
          { main: "SVs For Human Diseases", sub: "(Page-454)" },
          {
            main: "Manipulation/Editing Of SVs Using CRISPR/Cas",
            sub: "(Page-455)",
          },
          { main: "SVs In Mouse", sub: "(Page-452)" },
          { main: "SVs In Cattle", sub: "(Page-452)" },
          { main: "SVs In Plant Genomes", sub: "(Page-452)" },
          { main: "SVs In Arabidopsis", sub: "(Page-452)" },
          { main: "SVs In Maize", sub: "(Page-453)" },
          { main: "SVs In Cotton", sub: "(Page-453)" },
          { main: "SVs In Banana", sub: "(Page-453)" },
          { main: "SVs In Rice", sub: "(Page-453)" },
          { main: "SVs In Soybean", sub: "(Page-454)" },
          { main: "SVs In Humans", sub: "(Page-451)" },
          {
            main: "SVs In Humans, Mouse SVs For Plant Breeding And Cattle",
            sub: "(Page-455)",
          },

          { main: "Cytogenomics: Paleopolyploidy", sub: "(Page-457-468)" },
          {
            main: "Recent Vs Ancient Polyploidy (Paleopolyploidy)",
            sub: "(Page-457)",
          },
          {
            main: "Main Features Of Palaeo Polyploid Genomes",
            sub: "(Page-458)",
          },
          {
            main: "Methods For Detecting Ancient Polyploidy Events",
            sub: "(Page-459)",
          },
          {
            main: "Map-Based Approaches (Identification Of Syntenous/Collinear Blocks Of Genes)",
            sub: "(Page-459)",
          },
          {
            main: "Tree-Based (Phylogenetic) Approach And The 2R Hypothesis",
            sub: "(Page-459)",
          },
          { main: "Age-Based Computational Approach", sub: "(Page-461)" },
          { main: "Occurrence Of Paleopolyploidy", sub: "(Page-462)" },
          { main: "Paleopolyploidy In Yeast", sub: "(Page-463)" },
          {
            main: "Paleopolyploidy In Amborella (Earliest Primitive Angiosperm)",
            sub: "(Page-464)",
          },
          { main: "Paleopolyploidy In Monocots And Dicots", sub: "(Page-464)" },
          {
            main: "Paleopolyploidy In Animals (Vertebrates And Insects)",
            sub: "(Page-466)",
          },
          {
            main: "Orthologs And Paralogs Due To Paleopolyploidy Problems",
            sub: "(Page-468)",
          },

          {
            main: "Cytogenomics: Synthesis Of Microbial Genomes And Eukaryotic Chromosomes",
            sub: "(Page-469-482)",
          },
          {
            main: "Techniques Used For Synthesis Of Genomes",
            sub: "(Page-470)",
          },
          { main: "Polymerase Cycling Assembly (PCA)", sub: "(Page-470)" },
          { main: "Gibson Assembly Method", sub: "(Page-471)" },
          {
            main: "Steps For Designing And Synthesis Of Genomes",
            sub: "(Page-472)",
          },
          { main: "Services For Genome Synthesis", sub: "(Page-472)" },
          { main: "Synthesis Of Microbial Genomes", sub: "(Page-472)" },
          {
            main: "Synthesis Of A Bacterial Genome (Mycoplasma Genitalium)",
            sub: "(Page-474)",
          },
          {
            main: "Synthesis Of A Minimal Genome (Mycoplasma Genitalium)",
            sub: "(Page-474)",
          },
          { main: "Synthesis Of Eukaryotic Chromosomes", sub: "(Page-474)" },
          { main: "Synthesis Of Two Algal Chromosomes", sub: "(Page-474)" },
          { main: "Synthesis Of Yeast Chromosomes", sub: "(Page-476)" },
          {
            main: "Fusion Of All Yeast Chromosomes In One Or Two Chromosomes",
            sub: "(Page-479)",
          },
          {
            main: "Future Plan For Synthesis Of A Minimized Yeast Genome: SC 3.0 (2020)",
            sub: "(Page-479)",
          },
          { main: "Synthesis Of A Maize Minichromosome", sub: "(Page-480)" },
          {
            main: "Power Of Synthetic Genomics For Metabolic Engineering",
            sub: "(Page-481)",
          },

          {
            main: "Cytogenomics: 3D Chromosome Conformations (Chromosomics)",
            sub: "(Page-483-595)",
          },
          {
            main: "Technology For 3D Chromosome Conformations",
            sub: "(Page-484)",
          },
          { main: "Technologies Using Tissues", sub: "(Page-484)" },
          { main: "Technologies Using Single Cells", sub: "(Page-488)" },
          {
            main: "'GAM' And 'SPRITE': For Study Of 3D Structure",
            sub: "(Page-490)",
          },
          {
            main: "3D Structure Of Plant And Animal Genomes",
            sub: "(Page-492)",
          },
          { main: "A/B Compartments", sub: "(Page-492)" },
          {
            main: "Topologically Associated Domains (TADs And Meta-TADs)",
            sub: "(Page-493)",
          },
          { main: "Loops", sub: "(Page-494)" },
        ];

  const handleSearch = (event) => {
    setSearchInput(
      event.target.value.toLowerCase().replace(/\s+/g, " ").trim()
    );
  };

  const highlightText = (text, search) => {
    if (!search) return text;
    const regex = new RegExp(`(${search})`, "gi");
    return text.replace(
      regex,
      (match) => `<span class="highlight-green">${match}</span>`
    );
  };

  const filteredData = data.filter(
    (item) =>
      item.main.toLowerCase().includes(searchInput) ||
      item.sub.toLowerCase().includes(searchInput)
  );

  const displayData = searchInput
    ? filteredData
    : data.slice(0, visibleItemsCount);

  return (
    <div className="search-container">
      <h2>{`Search in ${category}`}</h2>
      <input
        type="text"
        id="searchInput"
        onChange={handleSearch}
        placeholder="Search..."
      />

      <ul id="contentList">
        {displayData.length > 0 ? (
          displayData.map((item, index) => (
            <li key={index}>
              <div
                className="main-content"
                dangerouslySetInnerHTML={{
                  __html: highlightText(item.main, searchInput),
                }}
              ></div>
              <div
                className="sub-content"
                dangerouslySetInnerHTML={{
                  __html: highlightText(item.sub, searchInput),
                }}
              ></div>
            </li>
          ))
        ) : (
          <p id="noResult">Nothing to show</p>
        )}
      </ul>
    </div>
  );
};

export default CategorySearch;

// 公开学术资料，依据本地履历、业绩清单和已整理的补充记录。更新于 2026-10-19。
window.PROFILE = {
  draft: false,
  name: "Yan Chen",
  localName: "陳 琰",
  initials: "YC",
  position: "Project Assistant Professor",
  department: "Institute of Industrial Science",
  institution: "The University of Tokyo",
  location: "Tokyo, Japan",
  photo: "", // 例如 assets/portrait.jpg；留空显示姓名缩写。
  bio: [
    "I am a Project Assistant Professor at the Institute of Industrial Science, The University of Tokyo. My research focuses on statistical shape modeling and geometric analysis of cerebral arteries. I received my Ph.D. in Interdisciplinary Information Studies from The University of Tokyo in October 2024.",
    "I study how vascular geometry can be represented, compared across individuals, and used in statistical analysis and blood flow simulation. My work also includes three-dimensional visualization and interfaces for 1D–0D hemodynamic simulation, as well as collaborative research on uncertainty quantification in cerebral circulation models."
  ],
  research: [
    { title: "Statistical shape modeling of cerebral arteries", tags: "SHAPE ANALYSIS", description: "Parameterization and geometric characterization of cerebral major arterial centerlines, with a focus on comparing vascular morphology across individuals. This work includes statistical shape models and deformation atlases." },
    { title: "Vascular geometry analysis using MRA data", tags: "GEOMETRIC ANALYSIS", description: "Development of analysis pipelines for large-scale magnetic resonance angiography (MRA) data to investigate anatomical variations in cerebral arteries, including the internal carotid artery and the Circle of Willis." },
    { title: "Hemodynamic simulation and scientific visualization", tags: "VISUALIZATION", description: "Development of three-dimensional vascular network visualization and interfaces for 1D–0D blood flow simulation, including virtual surgery interfaces and VR visualization of cerebral blood flow." },
    { title: "Uncertainty quantification in cerebral circulation", tags: "COLLABORATIVE WORK", description: "Collaborative research on uncertainty in cerebral circulation simulations, including machine learning surrogate models for evaluating collateral blood flow." }
  ],
  publications: [
    { year: "2026", type: "JOURNAL ARTICLE · PEER REVIEWED", title: "Development of a Framework for Geometric Analysis of Cerebral Major Arterial Centerlines", authors: "Chen Y., Bai Y., Oshima M.", venue: "IEEE Access, 14, 31437–31449, 2026.", links: [{ label: "DOI", url: "https://doi.org/10.1109/ACCESS.2026.3661651" }] },
    { year: "2024", type: "JOURNAL ARTICLE · PEER REVIEWED", title: "Development of a 3D vascular network visualization platform for one-dimensional hemodynamic simulation", authors: "Chen Y., Kobayashi M., Yuhn C., Oshima M.", venue: "Bioengineering, 11(4), 313, 2024.", links: [{ label: "DOI", url: "https://doi.org/10.3390/bioengineering11040313" }] },
    { year: "2022", type: "JOURNAL ARTICLE · PEER REVIEWED", title: "Uncertainty quantification in cerebral circulation simulations focusing on the collateral flow: Surrogate model approach with machine learning", authors: "Yuhn C., Oshima M., Chen Y., Hayakawa M., Yamada S.", venue: "PLOS Computational Biology, 18(7), e1009996, 2022.", links: [{ label: "DOI", url: "https://doi.org/10.1371/journal.pcbi.1009996" }] },
    // links 示例：[{ label: "DOI", url: "https://doi.org/实际DOI" }, { label: "PDF", url: "assets/paper.pdf" }]
  ],
  presentations: [
    { year: "2024", type: "CONFERENCE PRESENTATION", title: "Geometric and Pattern Analysis of Cerebral Major Arteries in a Large-scale Japanese MRA Study", authors: "Chen Y., Kobayashi M., Bai Y., Oshima M.", venue: "20th International Cerebrovascular Symposium, Tampere, Finland, December 2024.", links: [] },
    { year: "2024", type: "CONFERENCE PRESENTATION", title: "Development of an Elastic Deformation Atlas of Cerebral Major Arteries via Statistic Approach", authors: "Chen Y., Bai Y., Oshima M.", venue: "16th World Congress on Computational Mechanics, Vancouver, Canada, July 2024.", links: [] },
    { year: "2023", type: "CONFERENCE PRESENTATION", title: "Statistical and Morphometric Analysis of Cerebral Major Artery", authors: "Chen Y., Liang Y., Oshima M.", venue: "12th Asian-Pacific Conference on Biomechanics, Kuala Lumpur, Malaysia, November 2023.", links: [] }
  ],
  experience: [
    { date: "April 2026 — Present", title: "Project Assistant Professor", detail: "Institute of Industrial Science, The University of Tokyo." },
    { date: "April 2024 — March 2026", title: "Project Researcher", detail: "Institute of Industrial Science, The University of Tokyo. Statistical shape analysis of cerebral arteries." },
    { date: "October 2024", title: "Ph.D. in Interdisciplinary Information Studies", detail: "The University of Tokyo. Dissertation: Statistical Shape Modeling and Characterization of Centerline of Cerebral Major Artery." },
    { date: "April 2017 — March 2019", title: "Master’s degree in Interdisciplinary Information Studies", detail: "The University of Tokyo. Thesis: 予測医療に向けたバーチャル手術のためのインターフェースの開発." },
  ],
  // 原模板的 service 栏目现用于 Awards，不表示教学或学术服务经历。
  service: [
    { date: "Academic year 2018", title: "Outstanding Master’s Thesis", detail: "Graduate School of Interdisciplinary Information Studies, The University of Tokyo." },
    { date: "July 2018", title: "IACM Scholarship Award", detail: "International Association for Computational Mechanics, WCCM XIII, New York." },
    { date: "July 2018", title: "IACM-FRC Fellowship", detail: "International Association for Computational Mechanics, WCCM XIII, New York." }
  ],
  email: "chenyan@iis.u-tokyo.ac.jp",
  links: [], // 例如 { label: "Google Scholar", url: "https://scholar.google.com/citations?user=你的ID" }
  cv: "", // 例如 assets/cv.pdf；文件加入后再填，按钮会自动出现。
  updated: "2026-10-19"
};

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>MRreport</title>
    <link rel="stylesheet" href="styles.css">
    <script src="script.js" defer></script>
</head>
<body>
    <div class="container">
        <div class="sidebar">
            <div class="title">MReport</div>
            <div class="section">
                <div class="heading">Summary</div>
                <div class="sub-section">ARNr 16S</div>
                <ul>
                    <li><a href="Import/index.html">Import</a></li>
                    <li><a href="Import/index.html">Classify</a></li>
                    <li><a href="taxonomic_table.html">Taxonomic Table</a></li>
                    <li><a href="taxonomic_barplot.html">Taxonomic Barplot</a></li>
                    <li><a href="diversity.html">Diversity</a></li>
                    <li><a href="core_metrics.html">Core Metrics</a></li>
                    <li><a href="rarefaction.html">Rarefaction</a></li>
                    <li><a href="ancom.html">ANCOM</a></li>
                    <li><a href="ancom_bc.html">ANCOM-BC</a></li>
                </ul>
            </div>
            <div class="section">
                <div class="heading">FVIR</div>
                <ul>
                    <li><a href="diagnostic_genes.html">Diagnostic genes</a></li>
                    <li><a href="coverage_mapping.html">Coverage Mapping</a></li>
                    <li><a href="profundity.html">Profundity</a></li>
                    <li><a href="universal_genes.html">Universal Genes</a></li>
                    <li><a href="snp_detection.html">SNP detection</a></li>
                    <li><a href="epa.html">EPA</a></li>
                </ul>
            </div>
        </div>
        <div class="main-content" id="main-content">
            <iframe id="content-frame" src="" frameborder="0" style="width: 100%; height: 100%;"></iframe>
        </div>
    </div>
</body>
</html>

export type Language = 'es' | 'en';

export interface Translations {
  // Navigation & Brand
  brandName: string;
  brandTagline: string;
  terminalStatus: string;
  navPortfolio: string;
  navCalculator: string;
  navSensitivity: string;
  navComparator: string;
  navAdvisor: string;
  navExecutiveReport: string;
  navNewProperty: string;
  navReturnHome: string;
  langSwitchEs: string;
  langSwitchEn: string;
  quickAccess: string;

  // Welcome Screen
  welcomeTag: string;
  welcomeSubtitle: string;
  welcomeAumLabel: string;
  welcomeCapRateLabel: string;
  welcomeOccupancyLabel: string;
  welcomeWaltLabel: string;
  welcomeYears: string;
  welcomeEnterPortal: string;
  welcomeEnterCalculator: string;
  welcomeEnterSensitivity: string;
  welcomeDcfTeaserTitle: string;
  welcomeDcfTeaserSubtitle: string;
  welcomeActiveBadge: string;
  welcomeAcquisitionValue: string;
  welcomeNetOperatingIncome: string;
  welcomeEntryCapRate: string;
  welcomeCashOnCash: string;
  welcomeAnalyzeFullDcf: string;
  welcomeLatestProperties: string;
  welcomeFeature1Title: string;
  welcomeFeature1Desc: string;
  welcomeFeature2Title: string;
  welcomeFeature2Desc: string;
  welcomeFeature3Title: string;
  welcomeFeature3Desc: string;
  welcomeFooterEngine: string;

  // Categories
  catAll: string;
  catOffices: string;
  catLogistics: string;
  catRetail: string;
  catHealthcare: string;
  catMixedUse: string;
  catHospitality: string;
  catOfficeFull: string;
  catLogisticFull: string;
  catRetailFull: string;
  catHealthFull: string;
  catHospitalityFull: string;
  catMixedFull: string;

  // Statuses
  statusOperating: string;
  statusAcquisition: string;
  statusAnalysis: string;
  statusRenovation: string;

  // Portfolio View
  portfolioAumTag: string;
  portfolioAssetsInCustody: string;
  portfolioTitle: string;
  portfolioTitleHighlight: string;
  portfolioSubtitle: string;
  portfolioAddPropertyBtn: string;
  portfolioAddButton: string;
  portfolioStatTotalValue: string;
  portfolioStatAcqBase: string;
  portfolioStatConsolidatedNoi: string;
  portfolioStatAnnualFlow: string;
  portfolioStatWeightedCap: string;
  portfolioStatRealYield: string;
  portfolioStatAvgOccupancy: string;
  portfolioStatGradeATenants: string;
  portfolioStatLeasableGla: string;
  portfolioStatTotalSurface: string;
  portfolioKpiAssetValue: string;
  portfolioKpiAssetValueSub: string;
  portfolioKpiConsolidatedNoi: string;
  portfolioKpiConsolidatedNoiSub: string;
  portfolioKpiWeightedCapRate: string;
  portfolioKpiWeightedCapRateSub: string;
  portfolioKpiAverageOccupancy: string;
  portfolioKpiAverageOccupancySub: string;
  portfolioKpiLeasableGla: string;
  portfolioKpiLeasableGlaSub: string;
  portfolioSearchPlaceholder: string;
  searchPlaceholder: string;
  portfolioGridView: string;
  portfolioTableView: string;
  viewCardTooltip: string;
  viewTableTooltip: string;
  portfolioSortPriceDesc: string;
  portfolioSortCapRateDesc: string;
  portfolioSortOccupancyDesc: string;
  portfolioSortAreaDesc: string;
  portfolioPurchasePrice: string;
  portfolioAnnualNoi: string;
  portfolioOccupancy: string;
  portfolioClass: string;
  classLabel: string;
  portfolioYearBuilt: string;
  portfolioActionDetails: string;
  portfolioActionModelDcf: string;
  portfolioDeleteConfirm: string;
  portfolioEmptySearch: string;
  portfolioResetFilters: string;
  viewDetails: string;
  confirmDeleteProperty: (name: string) => string;
  deleteProperty: string;
  entryCapRate: string;
  cashOnCash: string;
  annualNoi: string;
  irr10y: string;
  irr10yLabel: string;
  equityMultipleLabel: string;
  dscrDebtLabel: string;
  equityInvestedLabel: string;
  year1Label: string;
  yearLabel: string;
  totalProfit10y: string;
  glaLabel: string;
  occupancyLabel: string;
  waltLabel: string;
  tenantsLabel: string;
  cardAcquisitionPrice: string;
  cardSimulateDcf: string;
  noDebt: string;
  actionModel: string;
  reportYears: string;
  reportMonth: string;
  reportExpires: string;
  purchasePriceLabel: string;

  // Table Columns
  colProperty: string;
  colCategory: string;
  colLocation: string;
  colPrice: string;
  colGla: string;
  colOccupancy: string;
  colNoiAnnual: string;
  colNoi: string;
  colCapRate: string;
  colCashOnCash: string;
  colDscr: string;
  colIrr: string;
  colWalt: string;
  colActions: string;

  // Sensitivity Matrix
  matrixTag: string;
  matrixStressTesting: string;
  matrixTitle: string;
  matrixTitleHighlight: string;
  matrixDesc: string;
  dimensionsLabel: string;
  dimVacancyRent: string;
  dimPriceExitCap: string;
  metricLabel: string;
  metricIrrLabel: string;
  metricNoiAnnualLabel: string;
  heatmapTitle: string;
  heatmapBaseCase: string;
  heatmapHighReturn: string;
  heatmapStress: string;
  vacancyRateLabel: string;
  averageRentM2MonthLabel: string;
  exitCapRateLabel: string;
  heatmapBaseBadge: string;
  stressBreakEvenTitle: string;
  stressBreakEvenText: string;
  stressUpsideTitle: string;
  stressUpsideText: string;
  stressExitCapRiskTitle: string;
  stressExitCapRiskText: string;

  // Financial Calculator
  calcUnderwritingTag: string;
  dcfUnderwritingTag: string;
  flowsHoldingPeriod: (years: number) => string;
  calcFlowsYears: string;
  calcScenarioBase: string;
  calcScenarioBear: string;
  calcScenarioBull: string;
  scenarioBase: string;
  scenarioBear: string;
  scenarioBull: string;
  scenarioBaseTooltip: string;
  scenarioBearTooltip: string;
  scenarioBullTooltip: string;
  exportTeaserButton: string;
  calcCapRateEntry: string;
  calcOnCost: string;
  calcCashOnCashReturn: string;
  calcYieldOnEquity: string;
  calcAnnualNoiYear1: string;
  calcMargin: string;
  calcFreeCashFlow: string;
  calcPostDebtService: string;
  calcProjectedIrr10y: string;
  calcMultiple: string;
  calcBankDscr: string;
  calcDscrSafeTooltip: string;
  calcDscrRiskTooltip: string;
  calcDscrCompliant: string;
  calcDscrRisk: string;
  section1Title: string;
  downPaymentLabel: string;
  leverageLtv: string;
  debtAmount: string;
  loanInterestRateLabel: string;
  loanTermYearsLabel: string;
  initialCapexLabel: string;
  opexBreakdownTax: string;
  opexBreakdownInsurance: string;
  opexBreakdownMaintenance: string;
  opexBreakdownManagement: string;
  opexBreakdownUtilities: string;
  opexBreakdownReserves: string;
  calcScenarioBaseDesc: string;
  calcScenarioBearDesc: string;
  calcScenarioBullDesc: string;
  calcExecutiveTeaserBtn: string;
  calcParametersTab1: string;
  calcParametersTab2: string;
  calcParametersTab3: string;
  calcParametersTab4: string;
  calcPurchasePriceLabel: string;
  calcClosingCostsLabel: string;
  closingCostsLabel: string;
  totalEquityRequired: string;
  section2Title: string;
  glaRentableLabel: string;
  annualRentGrowthLabel: string;
  otherMonthlyIncomeLabel: string;
  effectiveGrossIncomeAnnual: string;
  section3Title: string;
  propertyTaxLabel: string;
  insuranceLabel: string;
  maintenanceLabel: string;
  propertyManagementRateLabel: string;
  totalOpexAnnual: string;
  section4Title: string;
  holdingPeriodYearsLabel: string;
  projectedExitValue: string;
  chartModelingTitle: string;
  chartModelingSubtitle: string;
  chartTabCashflow: string;
  chartTabEquity: string;
  chartTabOpex: string;
  chartTabSchedule: string;
  chartLegendEgi: string;
  chartLegendOpex: string;
  chartLegendDebt: string;
  chartLegendNetFlow: string;
  calcTotalFlow10y: string;
  calcNetSaleProceeds: string;
  calcPaybackCapital: string;
  chartLegendEquity: string;
  chartLegendDebtBalance: string;
  calcAccumulatedAmortization: string;
  tableYearCol: string;
  tableValueCol: string;
  waterfallTitle: string;
  waterfallSubtitle: string;
  waterfallGpi: string;
  waterfallVacancyCredit: string;
  waterfallEgi: string;
  waterfallOpex: string;
  waterfallNoi: string;
  waterfallDebtService: string;
  waterfallFreeCashFlow: string;
  calcInitialCapexLabel: string;
  calcDownPaymentLabel: string;
  calcLoanInterestLabel: string;
  calcLoanTermLabel: string;
  calcRentPerM2Label: string;
  calcOtherIncomeLabel: string;
  calcVacancyRateLabel: string;
  calcCreditLossLabel: string;
  calcRentGrowthLabel: string;
  calcPropertyTaxLabel: string;
  calcMaintenanceLabel: string;
  calcInsuranceLabel: string;
  calcManagementFeeLabel: string;
  calcUtilitiesLabel: string;
  calcReplacementReservesLabel: string;
  calcOpexGrowthLabel: string;
  calcHoldPeriodLabel: string;
  calcExitCapRateLabel: string;
  calcSaleCostsLabel: string;
  calcDiscountRateLabel: string;
  calcChartReturnsTab: string;
  calcChartWaterfallTab: string;
  calcChartScheduleTab: string;
  calcMetricGpi: string;
  calcMetricEgi: string;
  calcMetricOpex: string;
  calcMetricNoi: string;
  calcMetricDebtService: string;
  calcMetricCfbt: string;
  calcMetricCapRate: string;
  calcMetricCashOnCash: string;
  calcMetricIrr: string;
  calcMetricEquityMultiple: string;
  calcMetricDscr: string;
  calcMetricLtv: string;
  calcMetricDebtYield: string;
  calcMetricGrm: string;
  calcMetricPayback: string;
  calcTableYear: string;
  calcTableEgi: string;
  calcTableOpex: string;
  calcTableNoi: string;
  calcTableDebt: string;
  calcTablePrincipal: string;
  calcTableInterest: string;
  calcTableCashFlow: string;
  calcTableCumCashFlow: string;
  calcTableValue: string;
  calcTableEquity: string;
  calcTableCoc: string;

  // Asset Comparator
  compTag: string;
  comparatorTag: string;
  compBenchmarking: string;
  comparatorBenchmarking: string;
  compTitle: string;
  comparatorTitle: string;
  compTitleHighlight: string;
  comparatorTitleHighlight: string;
  compSubtitle: string;
  comparatorDesc: string;
  compSelectPrompt: string;
  selectUpTo3: (count: number) => string;
  openInDcf: string;
  compBestInClass: string;
  compMetricPrice: string;
  compMetricArea: string;
  compMetricOccupancy: string;
  compMetricAvgRent: string;
  compMetricNoi: string;
  compMetricCapRate: string;
  compMetricCashOnCash: string;
  compMetricIrr: string;
  compMetricEquityMultiple: string;
  compMetricDscr: string;
  compMetricLtv: string;
  compMetricWalt: string;
  compActionAnalyze: string;

  // Executive Report Modal
  reportHeaderTitle: string;
  reportAddressLabel: string;
  propCategoryLabel: string;
  reportGlaOccupancy: (gla: string, occ: number) => string;
  reportKeyMetrics: string;
  reportInitialEquity: string;
  reportTenantsContracts: string;
  copiedBtn: string;
  copySummaryBtn: string;
  printSavePdfBtn: string;
  classificationLabel: string;
  thesisSectionTitle: string;
  thesisDescriptionExtension: (gla: string, parking: number, occ: number) => string;
  financialSectionTitle: string;
  tenantsSectionTitle: string;
  reportDisclaimer: string;

  // AI Advisor Modal
  aiAdvisorTitle: string;
  aiAdvisorSubtitle: (name: string) => string;
  riskQualityRating: string;
  ratingExplanationDefault: string;
  ratingExplanationAAA: string;
  ratingExplanationAA: string;
  ratingExplanationBBB: string;
  recIndexationTitle: string;
  recIndexationImpact: string;
  recIndexationDesc: string;
  recEnergyTitle: string;
  recEnergyImpact: string;
  recEnergyDesc: string;
  recWaltTitle: string;
  recWaltImpact: string;
  recWaltDesc: (walt: number) => string;
  recPriorityHigh: string;
  recPriorityMed: string;
  valueAddPlaybookTitle: string;
  understoodBtn: string;

  // Add Property Modal
  addTitle: string;
  addSubtitle: string;
  addPropertyModalTitle: string;
  addPropertyModalSubtitle: string;
  addNameLabel: string;
  propNameLabel: string;
  addNamePlaceholder: string;
  propNamePlaceholder: string;
  addCategoryLabel: string;
  addCityLabel: string;
  cityLabel: string;
  cityPlaceholder: string;
  addCountryLabel: string;
  countryLabel: string;
  addAddressLabel: string;
  addPriceLabel: string;
  purchasePriceModalLabel: string;
  addGlaLabel: string;
  glaAreaLabel: string;
  addRentLabel: string;
  rentPerM2MonthModalLabel: string;
  addOccupancyLabel: string;
  occupancyModalLabel: string;
  addDownPaymentLabel: string;
  addInterestRateLabel: string;
  addLoanTermLabel: string;
  addImageUrlLabel: string;
  imageUrlLabel: string;
  addDescriptionLabel: string;
  thesisDescLabel: string;
  thesisDescPlaceholder: string;
  addCancelBtn: string;
  cancelBtn: string;
  addSubmitBtn: string;
  registerAssetBtn: string;

  // Property Detail Modal
  modalTabOverview: string;
  modalTabFinancials: string;
  modalTabCharts: string;
  modalTabTenants: string;
  modalTabOpex: string;
  modalModelInDcf: string;
  modalClose: string;
  modalOpenDcfSimulator: string;
  modalInvestmentThesisTitle: string;
  modalTotalArea: string;
  modalGrossAreaSub: string;
  modalLeasableArea: string;
  modalEfficiency: string;
  modalStabilizedOccupancy: string;
  modalVacancySub: string;
  modalParkingSpaces: string;
  modalParkingRatio: string;
  modalClassQualityTitle: string;
  modalClassQualityDesc: (cls: string) => string;
  modalEsgTitle: string;
  modalEsgDesc: string;
  modalWaltQualityTitle: string;
  modalWaltQualityDesc: (walt: number) => string;
  modalEntryCapRate: string;
  modalCashOnCashReturn: string;
  modalIrr10Years: string;
  modalEquityMultiple: string;
  modalCapitalStructureTitle: string;
  modalClosingCosts: string;
  modalInitialCapex: string;
  modalTotalEquityRequired: string;
  modalDebtStructureTitle: string;
  modalLoanAmount: string;
  modalMortgageInterestRate: string;
  modalAnnualDebtService: string;
  modalDscrCoverage: string;
  modalOperatingStatementTitle: string;
  modalGrossPotentialIncome: string;
  modalVacancyCreditLoss: string;
  modalEffectiveGrossIncome: string;
  modalOperatingExpenses: string;
  modalNetOperatingIncome: string;
  modalCashFlowBeforeTax: string;
  modalProjections10YTitle: string;
  modalProjections10YSubtitle: string;
  modalEquityAccumulationTitle: string;
  modalEquityAccumulationSubtitle: string;
  modalPropertyValueChart: string;
  modalPropertyEquityChart: string;
  modalRemainingLoanChart: string;
  modalTenantRosterTitle: string;
  modalTenantRosterSubtitle: string;
  modalActiveLeases: string;
  modalAnchorTenantBadge: string;
  modalCreditRatingBadge: string;
  modalOpexBreakdownTitle: string;
  modalEfficiencyRatio: string;
  modalTotalOpexConsolidated: string;
  modalEsgSystemsTitle: string;
  modalEsgItem1: string;
  modalEsgItem2: (param: string) => string;
  modalEsgItem3: string;
  modalEsgItem4: string;

  // Auth & Client Onboarding Modal
  authModalTitle: string;
  authModalSubtitle: string;
  authTabLogin: string;
  authTabRegister: string;
  authEmailLabel: string;
  authPasswordLabel: string;
  authFullNameLabel: string;
  authOrganizationLabel: string;
  authRoleLabel: string;
  authTicketSizeLabel: string;
  authRoleFundManager: string;
  authRoleFamilyOffice: string;
  authRoleUnderwriter: string;
  authRoleInstitutional: string;
  authRememberMe: string;
  authForgotPassword: string;
  authSubmitLogin: string;
  authSubmitRegister: string;
  authDemoQuickLogin: string;
  authDemoAccountTitle: string;
  authSecurityBadge: string;
  authSignedAs: string;
  authSignOut: string;
  authCreateAccountBadge: string;
  authSuccessToast: string;

  // Demo Mode & Workflow Tour
  welcomeDemoSectionTitle: string;
  welcomeDemoSectionSubtitle: string;
  welcomeDemoButton: string;
  welcomeWorkflowTourButton: string;
  demoBannerTitle: string;
  demoBannerText: string;
  demoBannerActionLogin: string;
  demoBannerActionTour: string;

  workflowTourTitle: string;
  workflowTourSubtitle: string;
  workflowStep1Title: string;
  workflowStep1Desc: string;
  workflowStep2Title: string;
  workflowStep2Desc: string;
  workflowStep3Title: string;
  workflowStep3Desc: string;
  workflowStep4Title: string;
  workflowStep4Desc: string;
  workflowTourTryDemoBtn: string;
  workflowTourLoginBtn: string;
}

export const translations: Record<Language, Translations> = {
  es: {
    // Navigation & Brand
    brandName: 'EQUITIQ',
    brandTagline: 'COMMERCIAL REAL ESTATE INTELLIGENCE',
    terminalStatus: 'PLATAFORMA INSTITUCIONAL CRE • V2.5 EN TIEMPO REAL',
    navPortfolio: 'Portafolio Global',
    navCalculator: 'Simulador DCF 10A',
    navSensitivity: 'Matriz Sensibilidad',
    navComparator: 'Comparador de Activos',
    navAdvisor: 'Asesor IA',
    navExecutiveReport: 'Memorando Ejecutivo',
    navNewProperty: '+ Nuevo Inmueble',
    navReturnHome: '← Volver al Inicio',
    langSwitchEs: 'ES',
    langSwitchEn: 'EN',
    quickAccess: 'Acceso Rápido',

    // Welcome Screen
    welcomeTag: 'Institutional Real Estate Intelligence Platform',
    welcomeSubtitle: 'Suite financiera de grado institucional para análisis de flujo de caja descontado (DCF), valoraciones de rentas comerciales, underwriting de deuda y matrices de estrés multivariable.',
    welcomeAumLabel: 'AUM Portafolio Total',
    welcomeCapRateLabel: 'Cap Rate Ponderado',
    welcomeOccupancyLabel: 'Ocupación Media',
    welcomeWaltLabel: 'WALT Promedio',
    welcomeYears: 'Años',
    welcomeEnterPortal: 'Ingresar al Portal de Inversiones',
    welcomeEnterCalculator: 'Abrir Simulador DCF',
    welcomeEnterSensitivity: 'Ver Matrices de Sensibilidad',
    welcomeDcfTeaserTitle: 'Underwriting Financiero & Cash Flow Proyectado',
    welcomeDcfTeaserSubtitle: 'Modelado cuantitativo a 10 años con análisis de desapalancamiento, rentas por inquilino y tasas de descuento dinámicas.',
    welcomeActiveBadge: 'Activo en Modelado',
    welcomeAcquisitionValue: 'Valor Adquisición',
    welcomeNetOperatingIncome: 'NOI Anual Estabilizado',
    welcomeEntryCapRate: 'Cap Rate Entrada',
    welcomeCashOnCash: 'Cash-on-Cash Yr 1',
    welcomeAnalyzeFullDcf: 'Analizar Modelo DCF Completo',
    welcomeLatestProperties: 'Inmuebles Destacados en Portafolio',
    welcomeFeature1Title: 'Modelado DCF Multivariable a 10 Años',
    welcomeFeature1Desc: 'Desglose exhaustivo de GPI, EGI, OpEx, NOI, servicio de deuda amortizable y flujos netos antes de impuestos con cálculo de TIR y Múltiplo de Capital.',
    welcomeFeature2Title: 'Pruebas de Estrés & Sensibilidad 2D',
    welcomeFeature2Desc: 'Mapas de calor bidimensionales para evaluar la resiliencia del flujo ante variaciones en vacancia, rentas por metro cuadrado y Cap Rates de salida.',
    welcomeFeature3Title: 'Memorando de Inversión Ejecutivo (PDF)',
    welcomeFeature3Desc: 'Generación instantánea de teasers institucionales listos para comités de inversión y family offices con impresión y exportación profesional.',
    welcomeFooterEngine: 'Desarrollado para Fondos de Inversión Inmobiliaria, Family Offices y REITs Comerciales • Datos en Tiempo Real',

    // Categories
    catAll: 'Todos los Activos',
    catOffices: 'Oficinas Corporativas',
    catLogistics: 'Logística & Industrial',
    catRetail: 'Centros Comerciales',
    catHealthcare: 'Salud & Medical Suites',
    catMixedUse: 'Usos Mixtos Premium',
    catHospitality: 'Hospitalidad & Hotelería',
    catOfficeFull: 'Oficinas Corporativas',
    catLogisticFull: 'Logística & Bodegas',
    catRetailFull: 'Retail & Centros Comerciales',
    catHealthFull: 'Salud & Laboratorios',
    catHospitalityFull: 'Hospitality & Hotelería',
    catMixedFull: 'Uso Mixto Prime',

    // Statuses
    statusOperating: 'Estabilizado / Operación',
    statusAcquisition: 'En Adquisición',
    statusAnalysis: 'En Análisis / DD',
    statusRenovation: 'En Remodelación',

    // Portfolio View
    portfolioAumTag: 'Portafolio de Inversión Institucional',
    portfolioAssetsInCustody: 'Activos en Custodia',
    portfolioTitle: 'Gestión Global de',
    portfolioTitleHighlight: 'Activos Comerciales',
    portfolioSubtitle: 'Supervisión integral de valoraciones, tasas de capitalización, ingresos operativos netos (NOI) y vigencia contractual (WALT).',
    portfolioAddPropertyBtn: '+ Registrar Inmueble Comercial',
    portfolioAddButton: '+ Registrar Inmueble Comercial',
    portfolioStatTotalValue: 'Valor Total del Portafolio',
    portfolioStatAcqBase: 'Valor de adquisición combinado',
    portfolioStatConsolidatedNoi: 'NOI Anual Consolidado',
    portfolioStatAnnualFlow: 'Ingreso operativo neto Año 1',
    portfolioStatWeightedCap: 'Cap Rate Ponderado',
    portfolioStatRealYield: 'Rendimiento promedio sobre compra',
    portfolioStatAvgOccupancy: 'Ocupación Promedio',
    portfolioStatGradeATenants: 'Superficie arrendada total',
    portfolioStatLeasableGla: 'Superficie Rentable (GLA)',
    portfolioStatTotalSurface: 'Metros cuadrados leasables',
    portfolioKpiAssetValue: 'Valor Total del Portafolio',
    portfolioKpiAssetValueSub: 'Valor de adquisición combinado',
    portfolioKpiConsolidatedNoi: 'NOI Anual Consolidado',
    portfolioKpiConsolidatedNoiSub: 'Ingreso operativo neto Año 1',
    portfolioKpiWeightedCapRate: 'Cap Rate Ponderado',
    portfolioKpiWeightedCapRateSub: 'Rendimiento promedio sobre compra',
    portfolioKpiAverageOccupancy: 'Ocupación Promedio',
    portfolioKpiAverageOccupancySub: 'Superficie arrendada total',
    portfolioKpiLeasableGla: 'Superficie Rentable (GLA)',
    portfolioKpiLeasableGlaSub: 'Metros cuadrados leasables',
    portfolioSearchPlaceholder: 'Buscar por nombre de inmueble, ciudad, inquilino o país...',
    searchPlaceholder: 'Buscar por nombre de inmueble, ciudad, inquilino o país...',
    portfolioGridView: 'Cuadrícula',
    portfolioTableView: 'Tabla Detallada',
    viewCardTooltip: 'Vista Tarjetas',
    viewTableTooltip: 'Vista Tabla Detallada',
    portfolioSortPriceDesc: 'Mayor Precio',
    portfolioSortCapRateDesc: 'Mayor Cap Rate',
    portfolioSortOccupancyDesc: 'Mayor Ocupación',
    portfolioSortAreaDesc: 'Mayor Superficie (GLA)',
    portfolioPurchasePrice: 'Precio Compra',
    portfolioAnnualNoi: 'NOI Anual',
    portfolioOccupancy: 'Ocupación',
    portfolioClass: 'Clase',
    classLabel: 'Clase',
    portfolioYearBuilt: 'Año Construcción',
    portfolioActionDetails: 'Ficha Técnica',
    portfolioActionModelDcf: 'Simular en DCF',
    portfolioDeleteConfirm: '¿Deseas eliminar este inmueble del portafolio?',
    portfolioEmptySearch: 'No se encontraron inmuebles que coincidan con la búsqueda o filtro seleccionado.',
    portfolioResetFilters: 'Restablecer Filtros',
    viewDetails: 'Ver Ficha Técnica',
    confirmDeleteProperty: (name: string) => `¿Estás seguro de que deseas eliminar "${name}" del portafolio?`,
    deleteProperty: 'Eliminar Inmueble',
    entryCapRate: 'Cap Rate Entrada',
    cashOnCash: 'Cash-on-Cash',
    annualNoi: 'NOI Anual',
    irr10y: 'TIR 10 Años',
    irr10yLabel: 'TIR Proyectada (10 Años)',
    equityMultipleLabel: 'Múltiplo de Capital (Equity Multiple)',
    dscrDebtLabel: 'Cobertura de Deuda (DSCR)',
    equityInvestedLabel: 'Equity Inicial Requerido',
    year1Label: 'Año 1',
    yearLabel: 'Año',
    totalProfit10y: 'Retorno Total Proyectado',
    glaLabel: 'Superficie GLA',
    occupancyLabel: 'Ocupación',
    waltLabel: 'WALT Promedio',
    tenantsLabel: 'Inquilinos',
    cardAcquisitionPrice: 'Precio de Adquisición',
    cardSimulateDcf: 'Modelar Flujo DCF',
    noDebt: 'Sin Deuda',
    actionModel: 'Modelar',
    reportYears: 'años',
    reportMonth: 'mes',
    reportExpires: 'Vence',
    purchasePriceLabel: 'Precio de Adquisición',

    // Table Columns
    colProperty: 'Inmueble / Activo',
    colCategory: 'Categoría',
    colLocation: 'Ubicación',
    colPrice: 'Precio Compra',
    colGla: 'Superficie GLA',
    colOccupancy: 'Ocupación',
    colNoiAnnual: 'NOI Anual',
    colNoi: 'NOI Anual',
    colCapRate: 'Cap Rate',
    colCashOnCash: 'Cash-on-Cash',
    colDscr: 'DSCR',
    colIrr: 'TIR 10A',
    colWalt: 'WALT',
    colActions: 'Acciones',

    // Sensitivity Matrix
    matrixTag: 'Análisis de Sensibilidad Bidimensional',
    matrixStressTesting: 'Pruebas de Estrés Cuantitativas',
    matrixTitle: 'Matriz de Sensibilidad',
    matrixTitleHighlight: '& Resiliencia Financiera',
    matrixDesc: 'Simulación de escenarios cruzados para evaluar el impacto en el rendimiento financiero ante variaciones operativas y de mercado.',
    dimensionsLabel: 'Dimensiones de Estrés:',
    dimVacancyRent: 'Vacancia (%) vs. Renta ($/m²)',
    dimPriceExitCap: 'Precio Compra ($) vs. Exit Cap Rate (%)',
    metricLabel: 'Métrica Evaluada:',
    metricIrrLabel: 'TIR 10 Años (%)',
    metricNoiAnnualLabel: 'NOI Anual ($)',
    heatmapTitle: 'Mapa de Calor de Retornos Proyectados',
    heatmapBaseCase: 'Escenario Base Actual',
    heatmapHighReturn: 'Zona de Alto Rendimiento',
    heatmapStress: 'Zona de Estrés / Bajo Rendimiento',
    vacancyRateLabel: 'Tasa de Vacancia (%)',
    averageRentM2MonthLabel: 'Renta Promedio ($/m²/mes)',
    exitCapRateLabel: 'Cap Rate de Salida (%)',
    heatmapBaseBadge: 'BASE',
    stressBreakEvenTitle: '1. Punto de Equilibrio & Cobertura de Deuda (DSCR)',
    stressBreakEvenText: 'El activo soporta hasta una tasa de vacancia del 25% antes de que el DSCR caiga por debajo de 1.15x, lo que otorga un margen de seguridad amplio contra desocupaciones imprevistas.',
    stressUpsideTitle: '2. Potencial de Creación de Valor (Upside)',
    stressUpsideText: 'Un incremento del 10% en el canon de arrendamiento promedio al renovar contratos comprimirá el periodo de recuperación de capital en 1.8 años adicionales.',
    stressExitCapRiskTitle: '3. Sensibilidad a Tasas de Interés y Cap Rate Terminal',
    stressExitCapRiskText: 'Una expansión de +75 bps en el Cap Rate de salida a 10 años reduce la TIR global en aprox. 1.2%, manteniendo aún un múltiplo de capital superior a 2.0x.',

    // Financial Calculator
    calcUnderwritingTag: 'Underwriting de Flujos Descontados a 10 Años',
    dcfUnderwritingTag: 'Underwriting de Flujos Descontados a 10 Años',
    flowsHoldingPeriod: (years: number) => `Proyección ${years} Años`,
    calcFlowsYears: 'Proyección 10 Años',
    calcScenarioBase: 'Escenario Base',
    calcScenarioBear: 'Escenario Conservador',
    calcScenarioBull: 'Escenario Optimista',
    scenarioBase: 'Base',
    scenarioBear: 'Conservador',
    scenarioBull: 'Optimista',
    scenarioBaseTooltip: 'Escenario Base (Mercado Actual)',
    scenarioBearTooltip: 'Escenario Conservador (Estrés)',
    scenarioBullTooltip: 'Escenario Optimista (Upside)',
    exportTeaserButton: 'Generar Memorando Ejecutivo (PDF)',
    calcCapRateEntry: 'Cap Rate Entrada',
    calcOnCost: 'Rendimiento sobre Costo',
    calcCashOnCashReturn: 'Cash-on-Cash',
    calcYieldOnEquity: 'Retorno sobre Equity',
    calcAnnualNoiYear1: 'NOI Anual (Año 1)',
    calcMargin: 'Margen Operativo',
    calcFreeCashFlow: 'Flujo Libre de Caja',
    calcPostDebtService: 'Post-Servicio de Deuda',
    calcProjectedIrr10y: 'TIR Proyectada (10A)',
    calcMultiple: 'Múltiplo de Capital',
    calcBankDscr: 'Cobertura Bancaria (DSCR)',
    calcDscrSafeTooltip: 'Nivel óptimo de cobertura para banca comercial (>1.25x)',
    calcDscrRiskTooltip: 'Atención: DSCR ajustado, verificar covenants bancarios',
    calcDscrCompliant: 'Óptimo',
    calcDscrRisk: 'Ajustado',
    section1Title: 'Estructura de Capital & Financiamiento',
    downPaymentLabel: 'Enganche / Equity Aportado (%)',
    leverageLtv: 'Apalancamiento (LTV)',
    debtAmount: 'Monto Deuda Hipotecaria',
    loanInterestRateLabel: 'Tasa Interés Crédito Hipotecario (%)',
    loanTermYearsLabel: 'Plazo Amortización (Años)',
    initialCapexLabel: 'CapEx Inicial / Adecuaciones ($ USD)',
    opexBreakdownTax: 'Predial / Taxes',
    opexBreakdownInsurance: 'Seguros & Pólizas',
    opexBreakdownMaintenance: 'Mantenimiento & BMS',
    opexBreakdownManagement: 'Gestión / Property Mgmt',
    opexBreakdownUtilities: 'Servicios & Comunes',
    opexBreakdownReserves: 'Reserva para Reemplazos',
    calcScenarioBaseDesc: 'Proyecciones alineadas con condiciones de mercado actuales e inflación estándar.',
    calcScenarioBearDesc: 'Mayor vacancia (+5%), menor crecimiento de rentas (+1.5%) y mayor tasa de descuento.',
    calcScenarioBullDesc: 'Plena ocupación (98%), crecimiento de rentas acelerado (+4.5%) y compresión de Cap Rate.',
    calcExecutiveTeaserBtn: 'Generar Memorando Ejecutivo (PDF)',
    calcParametersTab1: '1. Adquisición & Deuda',
    calcParametersTab2: '2. Ingresos & Rentas',
    calcParametersTab3: '3. Gastos Operativos (OpEx)',
    calcParametersTab4: '4. Supuestos de Salida & DCF',
    calcPurchasePriceLabel: 'Precio de Compra ($ USD)',
    calcClosingCostsLabel: 'Costos de Cierre & Notaría (%)',
    closingCostsLabel: 'Costos de Cierre & Notaría (%)',
    totalEquityRequired: 'Equity Inicial Requerido',
    section2Title: 'Ingresos Operativos & Arriendos',
    glaRentableLabel: 'Superficie GLA Rentable (m²)',
    annualRentGrowthLabel: 'Crecimiento Anual de Renta (%)',
    otherMonthlyIncomeLabel: 'Otros Ingresos Anuales ($)',
    effectiveGrossIncomeAnnual: 'Ingreso Bruto Efectivo (EGI)',
    section3Title: 'Gastos Operativos (OpEx)',
    propertyTaxLabel: 'Impuesto Predial Anual ($ USD)',
    insuranceLabel: 'Seguro & Pólizas Anual ($ USD)',
    maintenanceLabel: 'Mantenimiento & BMS ($ USD)',
    propertyManagementRateLabel: 'Honorarios Administración (% EGI)',
    totalOpexAnnual: 'OpEx Total Anual',
    section4Title: 'Supuestos de Salida & Tenencia',
    holdingPeriodYearsLabel: 'Horizonte de Inversión (Años)',
    projectedExitValue: 'Valor de Salida Proyectado',
    chartModelingTitle: 'Modelado Financiero & Gráficos Cuantitativos',
    chartModelingSubtitle: 'Visualización dinámica de retornos, desapalancamiento y estructura de costos',
    chartTabCashflow: 'Flujo de Caja a 10 Años',
    chartTabEquity: 'Equity & Desapalancamiento',
    chartTabOpex: 'Estructura OpEx',
    chartTabSchedule: 'Tabla Multianual',
    chartLegendEgi: 'Ingresos Brutos (EGI)',
    chartLegendOpex: 'Gastos Operativos (OpEx)',
    chartLegendDebt: 'Servicio de Deuda',
    chartLegendNetFlow: 'Flujo Neto (CFBT)',
    calcTotalFlow10y: 'Flujo Neto Acumulado (10A)',
    calcNetSaleProceeds: 'Ingreso Neto en Venta',
    calcPaybackCapital: 'Periodo de Recuperación',
    chartLegendEquity: 'Patrimonio Neto (Equity)',
    chartLegendDebtBalance: 'Deuda Restante',
    calcAccumulatedAmortization: 'Capital Amortizado al Final del Periodo',
    tableYearCol: 'Año',
    tableValueCol: 'Valor Activo',
    waterfallTitle: 'Estructura de Flujo en Cascada (Waterfall Year 1)',
    waterfallSubtitle: 'De GPI a Flujo de Caja Libre',
    waterfallGpi: 'Ingreso Potencial Bruto (GPI)',
    waterfallVacancyCredit: 'Vacancia & Pérdida Crediticia',
    waterfallEgi: 'Ingreso Bruto Efectivo (EGI)',
    waterfallOpex: 'Gastos Operativos (OpEx)',
    waterfallNoi: 'Ingreso Operativo Neto (NOI)',
    waterfallDebtService: 'Servicio de Deuda Hipotecaria',
    waterfallFreeCashFlow: 'Flujo de Caja Libre Antes de Impuestos',
    calcInitialCapexLabel: 'CapEx Inicial / Adecuaciones ($ USD)',
    calcDownPaymentLabel: 'Enganche / Equity Aportado (%)',
    calcLoanInterestLabel: 'Tasa de Interés Hipotecaria Anual (%)',
    calcLoanTermLabel: 'Plazo de Amortización del Crédito (Años)',
    calcRentPerM2Label: 'Renta Promedio Mensual ($/m²/mes)',
    calcOtherIncomeLabel: 'Otros Ingresos Anuales (Estac./Publicidad $)',
    calcVacancyRateLabel: 'Tasa de Vacancia Estabilizada (%)',
    calcCreditLossLabel: 'Pérdida por Incumplimiento Crediticio (%)',
    calcRentGrowthLabel: 'Crecimiento Anual de Rentas (%)',
    calcPropertyTaxLabel: 'Impuesto Predial Anual ($ USD)',
    calcMaintenanceLabel: 'Mantenimiento & BMS Anual ($ USD)',
    calcInsuranceLabel: 'Seguro & Pólizas de Inmueble ($ USD)',
    calcManagementFeeLabel: 'Honorarios de Administración (% del EGI)',
    calcUtilitiesLabel: 'Servicios & Comunes Anuales ($ USD)',
    calcReplacementReservesLabel: 'Reserva para Reemplazos (CapEx Anual $)',
    calcOpexGrowthLabel: 'Inflación / Crecimiento Anual OpEx (%)',
    calcHoldPeriodLabel: 'Horizonte de Inversión / Hold Period (Años)',
    calcExitCapRateLabel: 'Cap Rate de Salida / Terminal (%)',
    calcSaleCostsLabel: 'Costos de Intermediación & Venta (%)',
    calcDiscountRateLabel: 'Tasa de Descuento (WACC / Hurdle Rate %)',
    calcChartReturnsTab: 'Retornos & Flujos Anuales',
    calcChartWaterfallTab: 'Desglose de Ingresos (Waterfall)',
    calcChartScheduleTab: 'Tabla de Amortización',
    calcMetricGpi: 'Ingreso Potencial Bruto (GPI)',
    calcMetricEgi: 'Ingreso Bruto Efectivo (EGI)',
    calcMetricOpex: 'Gastos Operativos Totales (OpEx)',
    calcMetricNoi: 'Ingreso Operativo Neto (NOI)',
    calcMetricDebtService: 'Servicio de Deuda Anual',
    calcMetricCfbt: 'Flujo de Caja Antes de Impuestos (CFBT)',
    calcMetricCapRate: 'Cap Rate de Adquisición',
    calcMetricCashOnCash: 'Cash-on-Cash Return (Yr 1)',
    calcMetricIrr: 'Tasa Interna de Retorno (TIR 10A)',
    calcMetricEquityMultiple: 'Múltiplo de Capital (Equity Multiple)',
    calcMetricDscr: 'Cobertura de Deuda (DSCR)',
    calcMetricLtv: 'Apalancamiento (LTV)',
    calcMetricDebtYield: 'Debt Yield (NOI / Préstamo)',
    calcMetricGrm: 'Multiplicador de Renta Bruta (GRM)',
    calcMetricPayback: 'Periodo de Recuperación (Payback)',
    calcTableYear: 'Año',
    calcTableEgi: 'EGI',
    calcTableOpex: 'OpEx',
    calcTableNoi: 'NOI',
    calcTableDebt: 'Serv. Deuda',
    calcTablePrincipal: 'Principal',
    calcTableInterest: 'Intereses',
    calcTableCashFlow: 'Flujo Neto',
    calcTableCumCashFlow: 'Flujo Acum.',
    calcTableValue: 'Valor Activo',
    calcTableEquity: 'Equity',
    calcTableCoc: 'CoC %',

    // Asset Comparator
    compTag: 'Underwriting Comparativo Institucional',
    comparatorTag: 'Underwriting Comparativo Institucional',
    compBenchmarking: 'Benchmarking Multi-Activo',
    comparatorBenchmarking: 'Benchmarking Multi-Activo',
    compTitle: 'Comparador de Activos',
    comparatorTitle: 'Comparador de Activos',
    compTitleHighlight: '& Retornos Financieros',
    comparatorTitleHighlight: '& Retornos Financieros',
    compSubtitle: 'Contraste simultáneo de métricas de rentabilidad, riesgo de apalancamiento, duración de contratos (WALT) y proyecciones a 10 años.',
    comparatorDesc: 'Contraste simultáneo de métricas de rentabilidad, riesgo de apalancamiento, duración de contratos (WALT) y proyecciones a 10 años.',
    compSelectPrompt: 'Selecciona hasta 3 inmuebles para contrastar métricas clave',
    selectUpTo3: (count: number) => `Selecciona hasta 3 inmuebles para contrastar métricas clave (${count}/3 seleccionados)`,
    openInDcf: 'Modelar en DCF',
    compBestInClass: 'Líder en Categoría',
    compMetricPrice: 'Precio de Compra',
    compMetricArea: 'Superficie GLA',
    compMetricOccupancy: 'Ocupación Estabilizada',
    compMetricAvgRent: 'Renta Promedio $/m²',
    compMetricNoi: 'NOI Anual (Año 1)',
    compMetricCapRate: 'Cap Rate Adquisición',
    compMetricCashOnCash: 'Cash-on-Cash (Año 1)',
    compMetricIrr: 'TIR Proyectada (10 Años)',
    compMetricEquityMultiple: 'Múltiplo de Equity',
    compMetricDscr: 'Cobertura DSCR',
    compMetricLtv: 'Apalancamiento LTV',
    compMetricWalt: 'Vigencia Contratos (WALT)',
    compActionAnalyze: 'Modelar en DCF',

    // Executive Report Modal
    reportHeaderTitle: 'Memorando de Inversión & Executive Teaser',
    reportAddressLabel: 'Ubicación',
    propCategoryLabel: 'Categoría',
    reportGlaOccupancy: (gla, occ) => `Superficie Rentable (GLA): ${gla} m² | Ocupación: ${occ}%`,
    reportKeyMetrics: 'MÉTRICAS FINANCIERAS PRINCIPALES',
    reportInitialEquity: 'Equity Inicial Requerido',
    reportTenantsContracts: 'INQUILINOS Y CONTRATOS',
    copiedBtn: 'Copiado al Portapapeles',
    copySummaryBtn: 'Copiar Resumen',
    printSavePdfBtn: 'Imprimir / Guardar PDF',
    classificationLabel: 'Clasificación',
    thesisSectionTitle: '1. Tesis de Inversión y Ubicación',
    thesisDescriptionExtension: (gla, parking, occ) => `El activo cuenta con una superficie rentable (GLA) de ${gla} m², ${parking} cajones de estacionamiento y una tasa de ocupación estabilizada del ${occ}%.`,
    financialSectionTitle: '2. Resumen Financiero & Retornos Proyectados',
    tenantsSectionTitle: '3. Resumen de Inquilinos Principales',
    reportDisclaimer: '* Documento confidencial para uso exclusivo de análisis institucional. Las proyecciones financieras están sujetas a condiciones de mercado, tasas de interés y cumplimiento de contratos de arrendamiento. Elaborado a través de Equitiq PropTech Intelligence Platform.',

    // AI Advisor Modal
    aiAdvisorTitle: 'Diagnóstico Financiero & Tesis Estratégica',
    aiAdvisorSubtitle: (name) => `Análisis algorítmico de solvencia y creación de valor para ${name}`,
    riskQualityRating: 'Calificación de Riesgo & Calidad',
    ratingExplanationDefault: 'Activo con sólidas métricas de rentabilidad y bajo riesgo de apalancamiento.',
    ratingExplanationAAA: 'Grado Institucional Prime: Flujo de caja altamente resiliente, inquilinos corporativos solventes y cobertura de deuda holgada.',
    ratingExplanationAA: 'Grado Institucional Sólido: Cumple plenamente con los estándares bancarios de covenants y entrega atractivo retorno sobre capital.',
    ratingExplanationBBB: 'Activo de Valor Agregado / Estrés Moderado: Requiere optimización en ocupación o reestructuración de deuda.',
    recIndexationTitle: 'Indexación de Cánones a Inflación (CPI / IPC + Spread)',
    recIndexationImpact: '+1.5% a +2.2% Crecimiento Anual NOI',
    recIndexationDesc: 'Estructurar cláusulas de ajuste inflacionario automático en renovaciones de contrato para proteger el retorno real del portafolio.',
    recEnergyTitle: 'Optimización de Eficiencia Energética & Submetering',
    recEnergyImpact: '-8% a -12% en Gastos Operativos Comunes',
    recEnergyDesc: 'Implementación de medición individual de servicios por inquilino y luminarias inteligentes para transferir costos directos a arrendatarios.',
    recWaltTitle: 'Extensión de Plazo Ponderado de Contratos (WALT)',
    recWaltImpact: 'Compresión de Exit Cap Rate (-25 bps en Salida)',
    recWaltDesc: (walt) => `Actualmente el activo tiene un WALT de ${walt} años. Negociar extensiones anticipadas con inquilinos ancla a cambio de mejoras en adecuaciones (Tenant Improvements).`,
    recPriorityHigh: 'Alta',
    recPriorityMed: 'Media',
    valueAddPlaybookTitle: 'Plan Estratégico de Creación de Valor (Value-Add Playbook)',
    understoodBtn: 'Entendido',

    // Add Property Modal
    addTitle: 'Añadir Nuevo Inmueble Comercial',
    addSubtitle: 'Completa los parámetros técnicos y financieros para incorporar el activo al portafolio institucional.',
    addPropertyModalTitle: 'Añadir Nuevo Inmueble Comercial',
    addPropertyModalSubtitle: 'Completa los parámetros técnicos y financieros para incorporar el activo al portafolio institucional.',
    addNameLabel: 'Nombre del Inmueble / Activo',
    propNameLabel: 'Nombre del Inmueble / Activo',
    addNamePlaceholder: 'Ej: Torre Corporativa Titanium Prime',
    propNamePlaceholder: 'Ej: Torre Corporativa Titanium Prime',
    addCategoryLabel: 'Categoría del Activo',
    addCityLabel: 'Ciudad',
    cityLabel: 'Ciudad',
    cityPlaceholder: 'Ej: Ciudad de México',
    addCountryLabel: 'País',
    countryLabel: 'País',
    addAddressLabel: 'Dirección o Corredor',
    addPriceLabel: 'Precio de Adquisición ($ USD)',
    purchasePriceModalLabel: 'Precio de Adquisición ($ USD)',
    addGlaLabel: 'Superficie Rentable GLA (m²)',
    glaAreaLabel: 'Superficie GLA (m²)',
    addRentLabel: 'Renta Promedio ($/m²/mes)',
    rentPerM2MonthModalLabel: 'Renta Promedio ($/m²/mes)',
    addOccupancyLabel: 'Tasa de Ocupación (%)',
    occupancyModalLabel: 'Tasa de Ocupación (%)',
    addDownPaymentLabel: 'Enganche / Equity Aportado (%)',
    addInterestRateLabel: 'Tasa de Interés Hipotecaria (%)',
    addLoanTermLabel: 'Plazo del Crédito (Años)',
    addImageUrlLabel: 'URL Imagen de Portada',
    imageUrlLabel: 'URL Imagen de Portada',
    addDescriptionLabel: 'Descripción / Tesis del Inmueble',
    thesisDescLabel: 'Descripción / Tesis de Inversión',
    thesisDescPlaceholder: 'Describe la vocación del inmueble, perfil de inquilinos y propuesta de valor...',
    addCancelBtn: 'Cancelar',
    cancelBtn: 'Cancelar',
    addSubmitBtn: 'Registrar Inmueble',
    registerAssetBtn: 'Registrar Inmueble',

    // Property Detail Modal
    modalTabOverview: '1. Visión & Arquitectura',
    modalTabFinancials: '2. Radiografía Financiera',
    modalTabCharts: '3. Gráficos & Proyección',
    modalTabTenants: '4. Inquilinos & WALT',
    modalTabOpex: '5. OpEx & Sostenibilidad',
    modalModelInDcf: 'Modelar en DCF',
    modalClose: 'Cerrar',
    modalOpenDcfSimulator: 'Abrir en Simulador DCF',
    modalInvestmentThesisTitle: 'Tesis de Inversión y Descripción del Activo',
    modalTotalArea: 'Superficie Total',
    modalGrossAreaSub: 'Área Bruta Construida',
    modalLeasableArea: 'Superficie Rentable (GLA)',
    modalEfficiency: 'Eficiencia',
    modalStabilizedOccupancy: 'Ocupación Estabilizada',
    modalVacancySub: 'Vacancia',
    modalParkingSpaces: 'Estacionamientos',
    modalParkingRatio: 'Ratio',
    modalClassQualityTitle: 'Calidad y Clasificación',
    modalClassQualityDesc: (cls) => `Inmueble Grado Institucional Clase ${cls} con especificaciones premium.`,
    modalEsgTitle: 'Sostenibilidad & Eficiencia',
    modalEsgDesc: 'Sistemas de iluminación LED inteligente, fachadas de bajo consumo térmico y monitoreo BMS.',
    modalWaltQualityTitle: 'Perfil de Renta & WALT',
    modalWaltQualityDesc: (walt) => `${walt} años promedio ponderado de vigencia contractual restante con inquilinos grado de inversión.`,
    modalEntryCapRate: 'Cap Rate Entrada',
    modalCashOnCashReturn: 'Cash-on-Cash',
    modalIrr10Years: 'TIR / IRR (10 Años)',
    modalEquityMultiple: 'Múltiplo de Capital',
    modalCapitalStructureTitle: 'Estructura de Capital & Adquisición',
    modalClosingCosts: 'Costos de Cierre',
    modalInitialCapex: 'CapEx Inicial / Adecuaciones',
    modalTotalEquityRequired: 'Equity Total Requerido',
    modalDebtStructureTitle: 'Estructura de Deuda & Servicio',
    modalLoanAmount: 'Monto del Crédito',
    modalMortgageInterestRate: 'Tasa de Interés Hipotecaria',
    modalAnnualDebtService: 'Servicio de Deuda Anual',
    modalDscrCoverage: 'Cobertura DSCR',
    modalOperatingStatementTitle: 'Estado de Resultados Operativos (Año 1 Proyectado)',
    modalGrossPotentialIncome: 'Ingreso Potencial Bruto',
    modalVacancyCreditLoss: 'Pérdida por Vacancia & Crédito',
    modalEffectiveGrossIncome: 'Ingreso Bruto Efectivo',
    modalOperatingExpenses: 'Gastos Operativos',
    modalNetOperatingIncome: 'Ingreso Operativo Neto',
    modalCashFlowBeforeTax: 'Flujo de Caja Antes de Impuestos',
    modalProjections10YTitle: 'Proyección de Flujos a 10 Años',
    modalProjections10YSubtitle: 'NOI vs Servicio de Deuda vs Flujo Neto de Caja',
    modalEquityAccumulationTitle: 'Acumulación de Equity y Desapalancamiento',
    modalEquityAccumulationSubtitle: 'Valor de la propiedad vs Saldo de crédito hipotecario',
    modalPropertyValueChart: 'Valor del Inmueble',
    modalPropertyEquityChart: 'Patrimonio Neto (Equity)',
    modalRemainingLoanChart: 'Saldo Deuda Pendiente',
    modalTenantRosterTitle: 'Nómina de Inquilinos y Contratos de Arrendamiento',
    modalTenantRosterSubtitle: 'Promedio Ponderado de Vigencia Contractual (WALT)',
    modalActiveLeases: 'Contratos Vigentes',
    modalAnchorTenantBadge: 'Inquilino Ancla',
    modalCreditRatingBadge: 'Rating',
    modalOpexBreakdownTitle: 'Desglose de Gastos Operativos (OpEx Anual)',
    modalEfficiencyRatio: 'Ratio de Eficiencia Operativa',
    modalTotalOpexConsolidated: 'OpEx Total Consolidado',
    modalEsgSystemsTitle: 'Sistemas de Eficiencia Energética & Mantenimiento Preventivo',
    modalEsgItem1: 'Monitoreo automatizado con plataforma BMS (Building Management System) 24/7.',
    modalEsgItem2: (param) => `Fondo de reserva de reemplazo estructurado al ${param}.`,
    modalEsgItem3: 'Póliza de seguro todo riesgo con cobertura de interrupción de rentas y catástrofes naturales.',
    modalEsgItem4: 'Submetering individual para transferir cargos directos de electricidad a arrendatarios.',

    // Auth & Client Onboarding Modal
    authModalTitle: 'Portal de Inversiones Institucional',
    authModalSubtitle: 'Acceso seguro para Gestores de Fondos, Family Offices e Inversionistas Acreditados',
    authTabLogin: 'Iniciar Sesión',
    authTabRegister: 'Registro de Inversionista',
    authEmailLabel: 'Correo Corporativo / Institucional',
    authPasswordLabel: 'Contraseña de Acceso',
    authFullNameLabel: 'Nombre Completo del Inversionista',
    authOrganizationLabel: 'Fondo / Entidad / Family Office',
    authRoleLabel: 'Perfil de Inversionista',
    authTicketSizeLabel: 'Capacidad de Inversión / Ticket Promedio',
    authRoleFundManager: 'Gestor de Fondo Inmobiliario / REIT Principal',
    authRoleFamilyOffice: 'Principal Family Office / LP Institucional',
    authRoleUnderwriter: 'Analista Cuantitativo CRE / Underwriter',
    authRoleInstitutional: 'Inversionista Institucional Calificado',
    authRememberMe: 'Recordar este dispositivo seguro (2FA activo)',
    authForgotPassword: '¿Olvidaste tu contraseña corporativa?',
    authSubmitLogin: 'Ingresar al Portal de Inversiones',
    authSubmitRegister: 'Solicitar Alta & Acceso Institucional',
    authDemoQuickLogin: 'Acceso Rápido con Credenciales de Demostración',
    authDemoAccountTitle: 'Acceso Institucional Partner (Equitiq Partners LP)',
    authSecurityBadge: 'Encriptación AES-256 de Grado Bancario • Cumplimiento SOC-2 & ISO 27001',
    authSignedAs: 'Conectado como',
    authSignOut: 'Cerrar Sesión',
    authCreateAccountBadge: 'Acceso Exclusivo para Clientes Institucionales',
    authSuccessToast: 'Bienvenido al Portal de Inversiones Institucional',

    // Demo Mode & Workflow Tour
    welcomeDemoSectionTitle: 'Ver en Demostración (Sin ser Cliente)',
    welcomeDemoSectionSubtitle: 'Explora cómo los comités de inversión y fondos operan aquí en modo interactivo antes de registrarte.',
    welcomeDemoButton: 'Explorar Plataforma en Demostración',
    welcomeWorkflowTourButton: 'Ver Cómo es el Trabajo Aquí (Tour Guiado)',
    demoBannerTitle: 'Modo Demostración Activo • Acceso de Invitado',
    demoBannerText: 'Tienes acceso total e interactivo a todos los inmuebles institucionales, modelos DCF y matrices de sensibilidad.',
    demoBannerActionLogin: 'Ingresar como Cliente',
    demoBannerActionTour: 'Cómo se Trabaja Aquí',

    workflowTourTitle: 'Cómo se Trabaja en EQUITIQ',
    workflowTourSubtitle: 'Descubre el flujo de trabajo integral con el que fondos institucionales, analistas y family offices evalúan y operan activos comerciales.',
    workflowStep1Title: '1. Sourcing & Supervisión de Cartera',
    workflowStep1Desc: 'Supervisión en tiempo real de métricas consolidadas: AUM global, Cap Rate ponderado, ocupación estabilizada y vencimientos WALT por clase de activo.',
    workflowStep2Title: '2. Underwriting & Modelado DCF a 10 Años',
    workflowStep2Desc: 'Simulación precisa de flujos de caja descontados con cronogramas de amortización de deuda, NOI, TIR apalancada, Cash-on-Cash y Equity Multiple.',
    workflowStep3Title: '3. Pruebas de Estrés & Matrices 2D',
    workflowStep3Desc: 'Análisis bidimensional de resiliencia financiera ante variaciones simultáneas en vacancia, cánones por m² y tasas de salida (Exit Cap Rates).',
    workflowStep4Title: '4. Comité de Inversiones & Memorando',
    workflowStep4Desc: 'Generación instantánea de dossiers ejecutivos con métricas de solvencia, inquilinos AAA y exportación directa a formato PDF.',
    workflowTourTryDemoBtn: 'Explorar en Demostración',
    workflowTourLoginBtn: 'Ingresar al Portal de Inversiones',
  },

  en: {
    // Navigation & Brand
    brandName: 'EQUITIQ',
    brandTagline: 'COMMERCIAL REAL ESTATE INTELLIGENCE',
    terminalStatus: 'INSTITUTIONAL CRE PLATFORM • V2.5 REAL-TIME',
    navPortfolio: 'Global Portfolio',
    navCalculator: '10Y DCF Model',
    navSensitivity: 'Sensitivity Matrix',
    navComparator: 'Asset Comparator',
    navAdvisor: 'AI Underwriter',
    navExecutiveReport: 'Executive Memo',
    navNewProperty: '+ Add Property',
    navReturnHome: '← Return Home',
    langSwitchEs: 'ES',
    langSwitchEn: 'EN',
    quickAccess: 'Quick Access',

    // Welcome Screen
    welcomeTag: 'Institutional Real Estate Intelligence Platform',
    welcomeSubtitle: 'Institutional-grade financial suite for discounted cash flow (DCF) underwriting, commercial lease analysis, debt covenant stress testing, and multi-variable scenario modeling.',
    welcomeAumLabel: 'Total Portfolio AUM',
    welcomeCapRateLabel: 'Weighted Cap Rate',
    welcomeOccupancyLabel: 'Average Occupancy',
    welcomeWaltLabel: 'Average WALT',
    welcomeYears: 'Years',
    welcomeEnterPortal: 'Enter Investment Portal',
    welcomeEnterCalculator: 'Open DCF Simulator',
    welcomeEnterSensitivity: 'View Sensitivity Matrices',
    welcomeDcfTeaserTitle: 'Financial Underwriting & Cash Flow Projections',
    welcomeDcfTeaserSubtitle: 'Quantitative 10-year modeling featuring debt de-leveraging schedules, tenant-by-tenant lease rolls, and dynamic hurdle rates.',
    welcomeActiveBadge: 'Underwriting Active',
    welcomeAcquisitionValue: 'Acquisition Price',
    welcomeNetOperatingIncome: 'Stabilized Annual NOI',
    welcomeEntryCapRate: 'Entry Cap Rate',
    welcomeCashOnCash: 'Year 1 Cash-on-Cash',
    welcomeAnalyzeFullDcf: 'Analyze Full DCF Model',
    welcomeLatestProperties: 'Featured Portfolio Assets',
    welcomeFeature1Title: '10-Year Multi-Variable DCF Modeling',
    welcomeFeature1Desc: 'Comprehensive breakdown of GPI, EGI, OpEx line items, NOI, amortizing debt service, and net cash flows with automated IRR and Equity Multiple computation.',
    welcomeFeature2Title: '2D Stress Testing & Sensitivity Heatmaps',
    welcomeFeature2Desc: 'Two-dimensional matrix grids assessing cash flow resilience against shifts in occupancy, lease rates per square meter, and exit cap rates.',
    welcomeFeature3Title: 'Executive Investment Memorandum (PDF)',
    welcomeFeature3Desc: 'Instant institutional teasers tailored for investment committees, family offices, and private equity sponsors with clean print and PDF exports.',
    welcomeFooterEngine: 'Engineered for Real Estate Private Equity, Family Offices, and Institutional REITs • Real-time Data',

    // Categories
    catAll: 'All Assets',
    catOffices: 'Corporate Offices',
    catLogistics: 'Logistics & Industrial',
    catRetail: 'Shopping Centers & Retail',
    catHealthcare: 'Healthcare & Medical Suites',
    catMixedUse: 'Premium Mixed-Use',
    catHospitality: 'Hospitality & Hotels',
    catOfficeFull: 'Corporate Offices',
    catLogisticFull: 'Logistics & Warehousing',
    catRetailFull: 'Retail & Shopping Centers',
    catHealthFull: 'Healthcare & Labs',
    catHospitalityFull: 'Hospitality & Hotels',
    catMixedFull: 'Prime Mixed-Use',

    // Statuses
    statusOperating: 'Stabilized / Operating',
    statusAcquisition: 'In Acquisition',
    statusAnalysis: 'Underwriting / DD',
    statusRenovation: 'Under Renovation',

    // Portfolio View
    portfolioAumTag: 'Institutional Investment Portfolio',
    portfolioAssetsInCustody: 'Assets under Management',
    portfolioTitle: 'Global Management of',
    portfolioTitleHighlight: 'Commercial Real Estate',
    portfolioSubtitle: 'Comprehensive oversight of asset valuations, cap rates, net operating income (NOI), and weighted average lease terms (WALT).',
    portfolioAddPropertyBtn: '+ Onboard Commercial Asset',
    portfolioAddButton: '+ Onboard Commercial Asset',
    portfolioStatTotalValue: 'Total Portfolio Value',
    portfolioStatAcqBase: 'Combined acquisition basis',
    portfolioStatConsolidatedNoi: 'Consolidated Annual NOI',
    portfolioStatAnnualFlow: 'Net operating income Year 1',
    portfolioStatWeightedCap: 'Weighted Cap Rate',
    portfolioStatRealYield: 'Average acquisition yield',
    portfolioStatAvgOccupancy: 'Average Occupancy',
    portfolioStatGradeATenants: 'Total leased square meters',
    portfolioStatLeasableGla: 'Gross Leasable Area (GLA)',
    portfolioStatTotalSurface: 'Leasable square meters',
    portfolioKpiAssetValue: 'Total Portfolio Value',
    portfolioKpiAssetValueSub: 'Combined acquisition basis',
    portfolioKpiConsolidatedNoi: 'Consolidated Annual NOI',
    portfolioKpiConsolidatedNoiSub: 'Net operating income Year 1',
    portfolioKpiWeightedCapRate: 'Weighted Cap Rate',
    portfolioKpiWeightedCapRateSub: 'Average acquisition yield',
    portfolioKpiAverageOccupancy: 'Average Occupancy',
    portfolioKpiAverageOccupancySub: 'Total leased square meters',
    portfolioKpiLeasableGla: 'Gross Leasable Area (GLA)',
    portfolioKpiLeasableGlaSub: 'Leasable square meters',
    portfolioSearchPlaceholder: 'Search by property name, city, tenant, or country...',
    searchPlaceholder: 'Search by property name, city, tenant, or country...',
    portfolioGridView: 'Grid View',
    portfolioTableView: 'Table View',
    viewCardTooltip: 'Grid Cards View',
    viewTableTooltip: 'Detailed Table View',
    portfolioSortPriceDesc: 'Highest Price',
    portfolioSortCapRateDesc: 'Highest Cap Rate',
    portfolioSortOccupancyDesc: 'Highest Occupancy',
    portfolioSortAreaDesc: 'Largest Area (GLA)',
    portfolioPurchasePrice: 'Purchase Price',
    portfolioAnnualNoi: 'Annual NOI',
    portfolioOccupancy: 'Occupancy',
    portfolioClass: 'Class',
    classLabel: 'Class',
    portfolioYearBuilt: 'Year Built',
    portfolioActionDetails: 'Asset Details',
    portfolioActionModelDcf: 'Model in DCF',
    portfolioDeleteConfirm: 'Are you sure you want to remove this property from the portfolio?',
    portfolioEmptySearch: 'No commercial properties found matching the search criteria or selected filters.',
    portfolioResetFilters: 'Reset Filters',
    viewDetails: 'View Details',
    confirmDeleteProperty: (name: string) => `Are you sure you want to delete "${name}" from the portfolio?`,
    deleteProperty: 'Delete Property',
    entryCapRate: 'Entry Cap Rate',
    cashOnCash: 'Cash-on-Cash',
    annualNoi: 'Annual NOI',
    irr10y: '10Y IRR',
    irr10yLabel: 'Projected 10-Year IRR',
    equityMultipleLabel: 'Equity Multiple (EM)',
    dscrDebtLabel: 'Debt Service Coverage (DSCR)',
    equityInvestedLabel: 'Initial Equity Required',
    year1Label: 'Year 1',
    yearLabel: 'Year',
    totalProfit10y: 'Total Projected Profit',
    glaLabel: 'GLA Area',
    occupancyLabel: 'Occupancy',
    waltLabel: 'Average WALT',
    tenantsLabel: 'Tenants',
    cardAcquisitionPrice: 'Acquisition Price',
    cardSimulateDcf: 'Model Cash Flow',
    noDebt: 'No Debt',
    actionModel: 'Model',
    reportYears: 'years',
    reportMonth: 'mo',
    reportExpires: 'Expires',
    purchasePriceLabel: 'Acquisition Price',

    // Table Columns
    colProperty: 'Property / Asset',
    colCategory: 'Category',
    colLocation: 'Location',
    colPrice: 'Purchase Price',
    colGla: 'GLA Area',
    colOccupancy: 'Occupancy',
    colNoiAnnual: 'Annual NOI',
    colNoi: 'Annual NOI',
    colCapRate: 'Cap Rate',
    colCashOnCash: 'Cash-on-Cash',
    colDscr: 'DSCR',
    colIrr: '10Y IRR',
    colWalt: 'WALT',
    colActions: 'Actions',

    // Sensitivity Matrix
    matrixTag: 'Two-Dimensional Sensitivity Analysis',
    matrixStressTesting: 'Quantitative Stress Testing',
    matrixTitle: 'Sensitivity Matrix',
    matrixTitleHighlight: '& Financial Resilience',
    matrixDesc: 'Cross-variable simulations assessing financial returns under varying operational and market assumptions.',
    dimensionsLabel: 'Stress Dimensions:',
    dimVacancyRent: 'Vacancy (%) vs. Rent ($/m²)',
    dimPriceExitCap: 'Purchase Price ($) vs. Exit Cap Rate (%)',
    metricLabel: 'Evaluated Metric:',
    metricIrrLabel: '10-Year IRR (%)',
    metricNoiAnnualLabel: 'Annual NOI ($)',
    heatmapTitle: 'Projected Return Heatmap',
    heatmapBaseCase: 'Current Base Case',
    heatmapHighReturn: 'High Return Zone',
    heatmapStress: 'Stress / Low Yield Zone',
    vacancyRateLabel: 'Vacancy Rate (%)',
    averageRentM2MonthLabel: 'Average Rent ($/m²/mo)',
    exitCapRateLabel: 'Exit Cap Rate (%)',
    heatmapBaseBadge: 'BASE',
    stressBreakEvenTitle: '1. Break-Even & Debt Service Coverage (DSCR)',
    stressBreakEvenText: 'The asset sustains up to a 25% vacancy rate before DSCR falls below 1.15x, providing a substantial safety cushion against tenant turnover.',
    stressUpsideTitle: '2. Value Creation Potential (Upside)',
    stressUpsideText: 'A 10% lift in average renewal rental rates compresses the full equity payback timeline by an additional 1.8 years.',
    stressExitCapRiskTitle: '3. Interest Rate & Terminal Cap Rate Sensitivity',
    stressExitCapRiskText: 'A +75 bps expansion in the 10-year terminal cap rate reduces overall IRR by approximately 1.2%, while preserving an equity multiple above 2.0x.',

    // Financial Calculator
    calcUnderwritingTag: '10-Year Discounted Cash Flow Underwriting',
    dcfUnderwritingTag: '10-Year Discounted Cash Flow Underwriting',
    flowsHoldingPeriod: (years: number) => `Projections ${years} Years`,
    calcFlowsYears: '10-Year Projections',
    calcScenarioBase: 'Base Case',
    calcScenarioBear: 'Conservative Case',
    calcScenarioBull: 'Optimistic Case',
    scenarioBase: 'Base',
    scenarioBear: 'Conservative',
    scenarioBull: 'Optimistic',
    scenarioBaseTooltip: 'Base Case (Current Market)',
    scenarioBearTooltip: 'Conservative Case (Stress)',
    scenarioBullTooltip: 'Optimistic Case (Upside)',
    exportTeaserButton: 'Generate Executive Memo (PDF)',
    calcCapRateEntry: 'Entry Cap Rate',
    calcOnCost: 'Yield on Cost',
    calcCashOnCashReturn: 'Cash-on-Cash',
    calcYieldOnEquity: 'Yield on Equity',
    calcAnnualNoiYear1: 'Annual NOI (Yr 1)',
    calcMargin: 'Operating Margin',
    calcFreeCashFlow: 'Free Cash Flow',
    calcPostDebtService: 'Post-Debt Service',
    calcProjectedIrr10y: 'Projected 10Y IRR',
    calcMultiple: 'Equity Multiple',
    calcBankDscr: 'Banking DSCR',
    calcDscrSafeTooltip: 'Optimal commercial banking coverage (>1.25x)',
    calcDscrRiskTooltip: 'Attention: Tight DSCR, verify debt covenants',
    calcDscrCompliant: 'Optimal',
    calcDscrRisk: 'Tight',
    section1Title: 'Capital Structure & Financing',
    downPaymentLabel: 'Down Payment / Equity (%)',
    leverageLtv: 'Leverage (LTV)',
    debtAmount: 'Mortgage Loan Amount',
    loanInterestRateLabel: 'Mortgage Interest Rate (%)',
    loanTermYearsLabel: 'Amortization Term (Years)',
    initialCapexLabel: 'Initial CapEx / Tenant Improvements ($ USD)',
    opexBreakdownTax: 'Property Taxes',
    opexBreakdownInsurance: 'Insurance Premiums',
    opexBreakdownMaintenance: 'Maintenance & BMS',
    opexBreakdownManagement: 'Property Management',
    opexBreakdownUtilities: 'Utilities & Common',
    opexBreakdownReserves: 'Replacement Reserves',
    calcScenarioBaseDesc: 'Projections aligned with current market conditions and standard inflation.',
    calcScenarioBearDesc: 'Higher vacancy (+5%), muted rent growth (+1.5%), and higher hurdle rates.',
    calcScenarioBullDesc: 'Full occupancy (98%), accelerated rent escalation (+4.5%), and cap rate compression.',
    calcExecutiveTeaserBtn: 'Generate Executive Memo (PDF)',
    calcParametersTab1: '1. Acquisition & Debt',
    calcParametersTab2: '2. Revenues & Rents',
    calcParametersTab3: '3. Operating Expenses (OpEx)',
    calcParametersTab4: '4. Exit & DCF Assumptions',
    calcPurchasePriceLabel: 'Purchase Price ($ USD)',
    calcClosingCostsLabel: 'Closing Costs & Legal (%)',
    closingCostsLabel: 'Closing Costs & Legal (%)',
    totalEquityRequired: 'Initial Equity Required',
    section2Title: 'Revenues & Operating Leases',
    glaRentableLabel: 'Gross Leasable Area GLA (m²)',
    annualRentGrowthLabel: 'Annual Rent Escalation (%)',
    otherMonthlyIncomeLabel: 'Other Annual Income ($ USD)',
    effectiveGrossIncomeAnnual: 'Effective Gross Income (EGI)',
    section3Title: 'Operating Expenses (OpEx)',
    propertyTaxLabel: 'Annual Property Taxes ($ USD)',
    insuranceLabel: 'Annual Insurance Premiums ($ USD)',
    maintenanceLabel: 'Annual Maintenance & BMS ($ USD)',
    propertyManagementRateLabel: 'Property Management (% of EGI)',
    totalOpexAnnual: 'Total Annual OpEx',
    section4Title: 'Disposition & Hold Period Assumptions',
    holdingPeriodYearsLabel: 'Investment Hold Horizon (Years)',
    projectedExitValue: 'Projected Terminal Value',
    chartModelingTitle: 'Financial Modeling & Quantitative Visuals',
    chartModelingSubtitle: 'Dynamic visualization of returns, de-leveraging, and cost structures',
    chartTabCashflow: '10-Year Cash Flows',
    chartTabEquity: 'Equity & De-leveraging',
    chartTabOpex: 'OpEx Structure',
    chartTabSchedule: 'Multi-Year Table',
    chartLegendEgi: 'Gross Revenues (EGI)',
    chartLegendOpex: 'Operating Expenses (OpEx)',
    chartLegendDebt: 'Debt Service',
    chartLegendNetFlow: 'Net Cash Flow (CFBT)',
    calcTotalFlow10y: 'Cumulative Net Cash Flow (10Y)',
    calcNetSaleProceeds: 'Net Sales Proceeds',
    calcPaybackCapital: 'Capital Payback Period',
    chartLegendEquity: 'Net Asset Equity',
    chartLegendDebtBalance: 'Remaining Loan Balance',
    calcAccumulatedAmortization: 'Accumulated Principal Amortization',
    tableYearCol: 'Year',
    tableValueCol: 'Asset Value',
    waterfallTitle: 'Waterfall Cash Flow Structure (Year 1)',
    waterfallSubtitle: 'From GPI to Free Cash Flow',
    waterfallGpi: 'Gross Potential Income (GPI)',
    waterfallVacancyCredit: 'Vacancy & Credit Loss',
    waterfallEgi: 'Effective Gross Income (EGI)',
    waterfallOpex: 'Operating Expenses (OpEx)',
    waterfallNoi: 'Net Operating Income (NOI)',
    waterfallDebtService: 'Mortgage Debt Service',
    waterfallFreeCashFlow: 'Free Cash Flow Before Tax',
    calcInitialCapexLabel: 'Initial CapEx / Tenant Improvements ($ USD)',
    calcDownPaymentLabel: 'Down Payment / Equity (%)',
    calcLoanInterestLabel: 'Mortgage Interest Rate (%)',
    calcLoanTermLabel: 'Loan Amortization Term (Years)',
    calcRentPerM2Label: 'Average Monthly Rent ($/m²/mo)',
    calcOtherIncomeLabel: 'Annual Ancillary Income (Parking/Signage $)',
    calcVacancyRateLabel: 'Stabilized Vacancy Rate (%)',
    calcCreditLossLabel: 'Credit & Bad Debt Loss (%)',
    calcRentGrowthLabel: 'Annual Rent Escalation (%)',
    calcPropertyTaxLabel: 'Annual Property Taxes ($ USD)',
    calcMaintenanceLabel: 'Annual Maintenance & BMS ($ USD)',
    calcInsuranceLabel: 'Annual Insurance Premiums ($ USD)',
    calcManagementFeeLabel: 'Management Fee (% of EGI)',
    calcUtilitiesLabel: 'Annual Utilities & Common Charges ($ USD)',
    calcReplacementReservesLabel: 'Replacement Reserves (CapEx Annual $)',
    calcOpexGrowthLabel: 'OpEx Inflation Escalation (%)',
    calcHoldPeriodLabel: 'Investment Hold Period (Years)',
    calcExitCapRateLabel: 'Terminal / Exit Cap Rate (%)',
    calcSaleCostsLabel: 'Brokerage & Disposition Costs (%)',
    calcDiscountRateLabel: 'Discount Rate (WACC / Hurdle Rate %)',
    calcChartReturnsTab: 'Annual Cash Flows & Returns',
    calcChartWaterfallTab: 'Revenue Waterfall Breakdown',
    calcChartScheduleTab: 'Amortization Schedule',
    calcMetricGpi: 'Gross Potential Income (GPI)',
    calcMetricEgi: 'Effective Gross Income (EGI)',
    calcMetricOpex: 'Total Operating Expenses (OpEx)',
    calcMetricNoi: 'Net Operating Income (NOI)',
    calcMetricDebtService: 'Annual Debt Service',
    calcMetricCfbt: 'Cash Flow Before Tax (CFBT)',
    calcMetricCapRate: 'Acquisition Cap Rate',
    calcMetricCashOnCash: 'Cash-on-Cash Return (Yr 1)',
    calcMetricIrr: 'Internal Rate of Return (10Y IRR)',
    calcMetricEquityMultiple: 'Equity Multiple (EM)',
    calcMetricDscr: 'Debt Service Coverage (DSCR)',
    calcMetricLtv: 'Loan to Value (LTV)',
    calcMetricDebtYield: 'Debt Yield (NOI / Loan)',
    calcMetricGrm: 'Gross Rent Multiplier (GRM)',
    calcMetricPayback: 'Payback Period',
    calcTableYear: 'Year',
    calcTableEgi: 'EGI',
    calcTableOpex: 'OpEx',
    calcTableNoi: 'NOI',
    calcTableDebt: 'Debt Service',
    calcTablePrincipal: 'Principal',
    calcTableInterest: 'Interest',
    calcTableCashFlow: 'Net Cash Flow',
    calcTableCumCashFlow: 'Cum. Cash Flow',
    calcTableValue: 'Asset Value',
    calcTableEquity: 'Equity',
    calcTableCoc: 'CoC %',

    // Asset Comparator
    compTag: 'Institutional Comparative Underwriting',
    comparatorTag: 'Institutional Comparative Underwriting',
    compBenchmarking: 'Side-by-Side Benchmarking',
    comparatorBenchmarking: 'Side-by-Side Benchmarking',
    compTitle: 'Commercial Asset',
    comparatorTitle: 'Commercial Asset',
    compTitleHighlight: '& Return Comparator',
    comparatorTitleHighlight: '& Return Comparator',
    compSubtitle: 'Side-by-side contrast of key financial metrics, credit risk, lease duration (WALT), and 10-year IRR projections.',
    comparatorDesc: 'Side-by-side contrast of key financial metrics, credit risk, lease duration (WALT), and 10-year IRR projections.',
    compSelectPrompt: 'Select up to 3 properties to compare key underwriting metrics',
    selectUpTo3: (count: number) => `Select up to 3 properties to compare key underwriting metrics (${count}/3 selected)`,
    openInDcf: 'Model in DCF',
    compBestInClass: 'Best in Category',
    compMetricPrice: 'Purchase Price',
    compMetricArea: 'GLA Area',
    compMetricOccupancy: 'Stabilized Occupancy',
    compMetricAvgRent: 'Average Rent $/m²',
    compMetricNoi: 'Year 1 NOI',
    compMetricCapRate: 'Acquisition Cap Rate',
    compMetricCashOnCash: 'Year 1 Cash-on-Cash',
    compMetricIrr: 'Projected IRR (10Y)',
    compMetricEquityMultiple: 'Equity Multiple',
    compMetricDscr: 'DSCR Coverage',
    compMetricLtv: 'LTV Leverage',
    compMetricWalt: 'Lease WALT',
    compActionAnalyze: 'Model in DCF',

    // Executive Report Modal
    reportHeaderTitle: 'Investment Memorandum & Executive Teaser',
    reportAddressLabel: 'Location',
    propCategoryLabel: 'Category',
    reportGlaOccupancy: (gla, occ) => `Gross Leasable Area (GLA): ${gla} m² | Occupancy: ${occ}%`,
    reportKeyMetrics: 'KEY FINANCIAL METRICS',
    reportInitialEquity: 'Initial Equity Required',
    reportTenantsContracts: 'TENANTS AND LEASES',
    copiedBtn: 'Copied to Clipboard',
    copySummaryBtn: 'Copy Summary',
    printSavePdfBtn: 'Print / Save PDF',
    classificationLabel: 'Classification',
    thesisSectionTitle: '1. Investment Thesis & Location',
    thesisDescriptionExtension: (gla, parking, occ) => `The asset features a gross leasable area (GLA) of ${gla} m², ${parking} parking stalls, and a stabilized occupancy rate of ${occ}%.`,
    financialSectionTitle: '2. Financial Summary & Projected Returns',
    tenantsSectionTitle: '3. Major Tenant Roster',
    reportDisclaimer: '* Confidential document intended exclusively for institutional underwriting. Financial projections are subject to market shifts, interest rate movements, and tenant lease covenants. Prepared via Equitiq PropTech Intelligence Platform.',

    // AI Advisor Modal
    aiAdvisorTitle: 'Financial Diagnosis & Strategic Thesis',
    aiAdvisorSubtitle: (name) => `Algorithmic solvency and value creation analysis for ${name}`,
    riskQualityRating: 'Risk & Quality Rating',
    ratingExplanationDefault: 'Asset with robust return fundamentals and conservative leverage profile.',
    ratingExplanationAAA: 'Prime Institutional Grade: Highly resilient cash flows, blue-chip corporate tenancies, and comfortable debt covenant headroom.',
    ratingExplanationAA: 'Solid Institutional Grade: Fully compliant with commercial banking benchmarks and delivering attractive risk-adjusted equity returns.',
    ratingExplanationBBB: 'Value-Add / Moderate Stress: Requires occupancy optimization or debt restructuring.',
    recIndexationTitle: 'Lease Indexation to Inflation (CPI / Inflation + Spread)',
    recIndexationImpact: '+1.5% to +2.2% Annual NOI Growth',
    recIndexationDesc: 'Structure automatic inflation indexation clauses in lease renewals to safeguard the real return of the portfolio.',
    recEnergyTitle: 'Energy Efficiency Optimization & Submetering',
    recEnergyImpact: '-8% to -12% Common Area Operating Expenses',
    recEnergyDesc: 'Deploy tenant-level submetering and smart LED controls to pass through direct utility charges to tenants.',
    recWaltTitle: 'Weighted Average Lease Term Extension (WALT)',
    recWaltImpact: 'Exit Cap Rate Compression (-25 bps at Exit)',
    recWaltDesc: (walt) => `The asset currently carries a WALT of ${walt} years. Negotiate proactive lease extensions with anchor tenants in exchange for tailored tenant improvements to maximize disposition value.`,
    recPriorityHigh: 'High',
    recPriorityMed: 'Medium',
    valueAddPlaybookTitle: 'Strategic Value-Add Playbook',
    understoodBtn: 'Understood',

    // Add Property Modal
    addTitle: 'Add New Commercial Asset',
    addSubtitle: 'Complete the technical and financial parameters to integrate the asset into the institutional portfolio.',
    addPropertyModalTitle: 'Add New Commercial Asset',
    addPropertyModalSubtitle: 'Complete the technical and financial parameters to integrate the asset into the institutional portfolio.',
    addNameLabel: 'Property / Asset Name',
    propNameLabel: 'Property / Asset Name',
    addNamePlaceholder: 'e.g. Titanium Prime Corporate Tower',
    propNamePlaceholder: 'e.g. Titanium Prime Corporate Tower',
    addCategoryLabel: 'Asset Category',
    addCityLabel: 'City',
    cityLabel: 'City',
    cityPlaceholder: 'e.g. Mexico City',
    addCountryLabel: 'Country',
    countryLabel: 'Country',
    addAddressLabel: 'Address or Corridor',
    addPriceLabel: 'Acquisition Price ($ USD)',
    purchasePriceModalLabel: 'Acquisition Price ($ USD)',
    addGlaLabel: 'Gross Leasable Area GLA (m²)',
    glaAreaLabel: 'GLA Area (m²)',
    addRentLabel: 'Average Rent ($/m²/mo)',
    rentPerM2MonthModalLabel: 'Average Rent ($/m²/mo)',
    addOccupancyLabel: 'Occupancy Rate (%)',
    occupancyModalLabel: 'Occupancy Rate (%)',
    addDownPaymentLabel: 'Down Payment / Equity (%)',
    addInterestRateLabel: 'Mortgage Interest Rate (%)',
    addLoanTermLabel: 'Loan Term (Years)',
    addImageUrlLabel: 'Hero Image URL',
    imageUrlLabel: 'Hero Image URL',
    addDescriptionLabel: 'Property Description / Thesis',
    thesisDescLabel: 'Description / Investment Thesis',
    thesisDescPlaceholder: 'Describe asset vocation, tenant profile, and value proposition...',
    addCancelBtn: 'Cancel',
    cancelBtn: 'Cancel',
    addSubmitBtn: 'Onboard Asset',
    registerAssetBtn: 'Onboard Asset',

    // Property Detail Modal
    modalTabOverview: '1. Overview & Architecture',
    modalTabFinancials: '2. Financial Underwriting',
    modalTabCharts: '3. Charts & Projections',
    modalTabTenants: '4. Tenants & WALT',
    modalTabOpex: '5. OpEx & Sustainability',
    modalModelInDcf: 'Model in DCF',
    modalClose: 'Close',
    modalOpenDcfSimulator: 'Open in DCF Simulator',
    modalInvestmentThesisTitle: 'Investment Thesis & Asset Description',
    modalTotalArea: 'Total Gross Area',
    modalGrossAreaSub: 'Gross Built Area',
    modalLeasableArea: 'Gross Leasable Area (GLA)',
    modalEfficiency: 'Efficiency',
    modalStabilizedOccupancy: 'Stabilized Occupancy',
    modalVacancySub: 'Vacancy',
    modalParkingSpaces: 'Parking Stalls',
    modalParkingRatio: 'Ratio',
    modalClassQualityTitle: 'Quality & Classification',
    modalClassQualityDesc: (cls) => `Institutional Grade Class ${cls} asset with premium architectural specifications.`,
    modalEsgTitle: 'Sustainability & Efficiency',
    modalEsgDesc: 'Smart LED lighting systems, low-emissivity building envelopes, and BMS monitoring.',
    modalWaltQualityTitle: 'Lease Profile & WALT',
    modalWaltQualityDesc: (walt) => `${walt} years weighted average lease term remaining with investment-grade corporate tenants.`,
    modalEntryCapRate: 'Entry Cap Rate',
    modalCashOnCashReturn: 'Cash-on-Cash',
    modalIrr10Years: '10-Year IRR',
    modalEquityMultiple: 'Equity Multiple',
    modalCapitalStructureTitle: 'Capital Structure & Acquisition',
    modalClosingCosts: 'Closing Costs',
    modalInitialCapex: 'Initial CapEx / Tenant Improvements',
    modalTotalEquityRequired: 'Total Equity Required',
    modalDebtStructureTitle: 'Debt Structure & Service',
    modalLoanAmount: 'Loan Amount',
    modalMortgageInterestRate: 'Mortgage Interest Rate',
    modalAnnualDebtService: 'Annual Debt Service',
    modalDscrCoverage: 'DSCR Coverage',
    modalOperatingStatementTitle: 'Operating Statement (Year 1 Projected)',
    modalGrossPotentialIncome: 'Gross Potential Income',
    modalVacancyCreditLoss: 'Vacancy & Credit Loss',
    modalEffectiveGrossIncome: 'Effective Gross Income',
    modalOperatingExpenses: 'Operating Expenses',
    modalNetOperatingIncome: 'Net Operating Income',
    modalCashFlowBeforeTax: 'Cash Flow Before Tax',
    modalProjections10YTitle: '10-Year Cash Flow Projections',
    modalProjections10YSubtitle: 'NOI vs. Debt Service vs. Net Cash Flow',
    modalEquityAccumulationTitle: 'Equity Accumulation & De-leveraging',
    modalEquityAccumulationSubtitle: 'Property value vs. outstanding debt balance',
    modalPropertyValueChart: 'Property Value',
    modalPropertyEquityChart: 'Net Asset Equity',
    modalRemainingLoanChart: 'Remaining Loan Balance',
    modalTenantRosterTitle: 'Tenant Roster & Lease Schedule',
    modalTenantRosterSubtitle: 'Weighted Average Lease Term (WALT)',
    modalActiveLeases: 'Active Leases',
    modalAnchorTenantBadge: 'Anchor Tenant',
    modalCreditRatingBadge: 'Rating',
    modalOpexBreakdownTitle: 'Operating Expense Breakdown (Annual OpEx)',
    modalEfficiencyRatio: 'Operating Efficiency Ratio',
    modalTotalOpexConsolidated: 'Consolidated Total OpEx',
    modalEsgSystemsTitle: 'Energy Efficiency & Preventive Maintenance Systems',
    modalEsgItem1: '24/7 automated telemetry monitoring via Building Management System (BMS).',
    modalEsgItem2: (param) => `Replacement reserves structured at ${param}.`,
    modalEsgItem3: 'All-risk property insurance including business interruption and catastrophe indemnity.',
    modalEsgItem4: 'Individual tenant submetering to pass through direct utility charges.',

    // Auth & Client Onboarding Modal
    authModalTitle: 'Institutional Investment Portal',
    authModalSubtitle: 'Secure access for Fund Managers, Family Offices, and Accredited Institutional Investors',
    authTabLogin: 'Sign In',
    authTabRegister: 'Investor Onboarding',
    authEmailLabel: 'Corporate / Institutional Email',
    authPasswordLabel: 'Access Password',
    authFullNameLabel: 'Investor Full Name',
    authOrganizationLabel: 'Fund / Entity / Family Office',
    authRoleLabel: 'Investor Profile',
    authTicketSizeLabel: 'Target Investment Allocation / Ticket Size',
    authRoleFundManager: 'Real Estate Fund Manager / REIT Principal',
    authRoleFamilyOffice: 'Family Office Principal / Institutional LP',
    authRoleUnderwriter: 'Quantitative CRE Underwriter / Analyst',
    authRoleInstitutional: 'Qualified Institutional Investor',
    authRememberMe: 'Remember this trusted device (2FA active)',
    authForgotPassword: 'Forgot corporate credentials?',
    authSubmitLogin: 'Enter Investment Portal',
    authSubmitRegister: 'Request Institutional Membership',
    authDemoQuickLogin: 'Quick One-Click Demo Access',
    authDemoAccountTitle: 'Institutional Partner Access (Equitiq Partners LP)',
    authSecurityBadge: 'Bank-Grade AES-256 Encryption • SOC-2 & ISO 27001 Certified',
    authSignedAs: 'Signed in as',
    authSignOut: 'Sign Out',
    authCreateAccountBadge: 'Exclusive Access for Institutional Clients',
    authSuccessToast: 'Welcome to the Institutional Investment Portal',

    // Demo Mode & Workflow Tour
    welcomeDemoSectionTitle: 'Interactive Demo Mode (Explore as Guest)',
    welcomeDemoSectionSubtitle: 'Explore how investment committees and private equity funds analyze assets here before creating an account.',
    welcomeDemoButton: 'Explore Live Platform Demo',
    welcomeWorkflowTourButton: 'See How It Works Here (Workflow Tour)',
    demoBannerTitle: 'Interactive Demo Mode • Guest Access',
    demoBannerText: 'You have full interactive access to all commercial properties, 10-year DCF models, and stress matrices.',
    demoBannerActionLogin: 'Sign In as Client',
    demoBannerActionTour: 'How Work Flows Here',

    workflowTourTitle: 'How Institutional Work Flows in EQUITIQ',
    workflowTourSubtitle: 'Discover the end-to-end process private equity funds, quantitative underwriters, and family offices use to evaluate and operate high-yield commercial assets.',
    workflowStep1Title: '1. Asset Sourcing & Portfolio Oversight',
    workflowStep1Desc: 'Real-time monitoring of consolidated AUM, weighted cap rates, stabilized occupancy, and WALT roll schedules across asset classes.',
    workflowStep2Title: '2. DCF Underwriting & 10-Year Projections',
    workflowStep2Desc: 'Precise discounted cash flow simulations with debt amortization schedules, line-item OpEx, leveraged IRR, Cash-on-Cash, and Equity Multiples.',
    workflowStep3Title: '3. 2D Stress Testing & Sensitivity Matrices',
    workflowStep3Desc: 'Two-dimensional sensitivity heatmaps evaluating financial resilience against shifts in tenant vacancy, rental rates, and exit cap rates.',
    workflowStep4Title: '4. Investment Committee & Executive Memorandums',
    workflowStep4Desc: 'Instant creation of institutional investment memorandums with DSCR covenant metrics, AAA tenant rosters, and clean PDF export.',
    workflowTourTryDemoBtn: 'Explore Live Demo',
    workflowTourLoginBtn: 'Sign In to Investment Portal',
  },
};

export const TRANSLATIONS = translations;

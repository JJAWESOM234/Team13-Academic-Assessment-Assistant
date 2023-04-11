var iSLOWorking = 0
var aSLOid = []
var iSLOMax = 0

var iMeasureWorking = 0
var aMeasureid = []
var iMeasureMax = 0
/**
 * Initilizes each form to be invisible.
 */
{
    document.getElementById("nonAccGradContainer").style.display = "none"
    document.getElementById("AccGradContainer").style.display = "none"
    document.getElementById("nonAccUndGradContainer").style.display = "none"
    document.getElementById("AccUndGradContainer").style.display = "none"
    document.getElementById("TestingDesignContainer").style.display = "none"
    document.getElementById("TestingDesignContainer2").style.display = "none"
}
/**
 * Function to handle the display change of selecting the different forms.
 * @param {Integer} iForm - Integer representing which form is being selected. 
 */
function fnShowCorrectForm(iForm) {
    if (iForm === 1) {
        document.getElementById("nonAccGradContainer").style.display = "block"
        document.getElementById("AccGradContainer").style.display = "none"
        document.getElementById("nonAccUndGradContainer").style.display = "none"
        document.getElementById("AccUndGradContainer").style.display = "none"
        document.getElementById("TestingDesignContainer").style.display = "none"
        document.getElementById("TestingDesignContainer2").style.display =
            "none"
    } else if (iForm === 2) {
        document.getElementById("AccGradContainer").style.display = "block"
        document.getElementById("nonAccGradContainer").style.display = "none"
        document.getElementById("nonAccUndGradContainer").style.display = "none"
        document.getElementById("AccUndGradContainer").style.display = "none"
        document.getElementById("TestingDesignContainer").style.display = "none"
        document.getElementById("TestingDesignContainer2").style.display =
            "none"
    } else if (iForm === 3) {
        document.getElementById("nonAccUndGradContainer").style.display =
            "block"
        document.getElementById("nonAccGradContainer").style.display = "none"
        document.getElementById("AccGradContainer").style.display = "none"
        document.getElementById("AccUndGradContainer").style.display = "none"
        document.getElementById("TestingDesignContainer").style.display = "none"
        document.getElementById("TestingDesignContainer2").style.display =
            "none"
    } else if (iForm === 4) {
        document.getElementById("AccUndGradContainer").style.display = "block"
        document.getElementById("nonAccGradContainer").style.display = "none"
        document.getElementById("AccGradContainer").style.display = "none"
        document.getElementById("nonAccUndGradContainer").style.display = "none"
        document.getElementById("TestingDesignContainer").style.display = "none"
        document.getElementById("TestingDesignContainer2").style.display =
            "none"
    } else if (iForm === 5) {
        document.getElementById("AccUndGradContainer").style.display = "none"
        document.getElementById("nonAccGradContainer").style.display = "none"
        document.getElementById("AccGradContainer").style.display = "none"
        document.getElementById("nonAccUndGradContainer").style.display = "none"
        document.getElementById("TestingDesignContainer").style.display =
            "block"
        document.getElementById("TestingDesignContainer2").style.display =
            "none"
    } else {
        document.getElementById("nonAccUndGradContainer").style.display = "none"
        document.getElementById("nonAccGradContainer").style.display = "none"
        document.getElementById("AccGradContainer").style.display = "none"
        document.getElementById("AccUndGradContainer").style.display = "none"
        document.getElementById("TestingDesignContainer").style.display = "none"
        document.getElementById("TestingDesignContainer2").style.display =
            "block"
    }
}

/**
 * Initial proof of concept of the new design implementing on the Accredited Graduate Assessment Report. This is the portion to bind the Accredited Graduate Assessment Report JSON model to the certain form using the id.
 */
$("#TestingDesignJson").jsonForm({
    schema: {
        title: "Accredited Graduate Assessment Report",
        type: "object",
        properties: {
            college: { type: "string", title: "College" },
            program: { type: "string", title: "Program" },
            academicYear: {
                type: "string",
                title: "Academic Year of Report",
            },
            lastAccReview: {
                type: "string",
                title: "Last Accrededition Review",
            },
            deptSchool: { type: "string", title: "Department/School" },
            degreeLevel: { type: "string", title: "Degree Level" },
            personPreparingReport: {
                type: "string",
                title: "Person Preparing the Report",
            },
            accreditationBody: { type: "string", title: "Accreditation Body" },
            SLOInformation: {
                type: "tabarray",
                id: "SLOEntry",
                minItems: 1,
                items: {
                    type: "object",
                    properties: {
                        programSLOsSLO1: {
                            type: "string",
                            title: "SLO Title",
                            required: true,
                        },
                        programSLOsSLO1Bloom: {
                            title: "Bloom’s Taxonomy Cognitive Level",
                            type: "string",
                            enum: [
                                "Knowledge",
                                "Analysis",
                                "Comprehension",
                                "Synthesis",
                                "Application",
                                "Evaluation",
                            ],
                            uniqueItems: true,
                        },
                        programSLOsSLO1Common: {
                            title: "Common Graduate Program SLOs",
                            type: "string",
                            enum: [
                                "1",
                                "2",
                                "3",
                                "4",
                                "Not Applicable for SLO",
                            ],
                            uniqueItems: true,
                        },
                        assessmentMeasure: {
                            type: "tabarray",
                            title: "II. Assessment Methods",
                            items: {
                                type: "object",
                                properties: {
                                    measureTitle: {
                                        title: "Measure",
                                        type: "string",
                                    },
                                    measureDomain: {
                                        title: "Domain",
                                        type: "string",
                                        enum: [
                                            "Examination",
                                            "Product",
                                            "Performance",
                                        ],
                                        description: "Check all that apply",
                                        uniqueItems: true,
                                    },
                                    measureDataFreq: {
                                        title: "Data Collection (i.e. annually, by semester, etc.)",
                                        type: "string",
                                    },
                                },
                            },
                        },
                        dataSLOStatus: {
                            type: "string",
                            title: "notitle",
                            enum: [
                                "Met",
                                "Partially Met",
                                "Not Met",
                                "Unknown",
                            ],
                            uniqueItems: true,
                        },
                        decisionActions: {
                            type: "textarea",
                        },
                    },
                },
            },
            additionalInformation: {
                type: "textarea",
                title: "Additional Information",
                description:
                    "OPTONAL:  Provide additional information that may be helpful to reviewers.",
            },
        },
    },
    form: [
        {
            type: "fieldset",
            title: "Reporting Details",
            expandable: false,
            items: [
                "college",
                "program",
                "academicYear",
                "lastAccReview",
                "deptSchool",
                "degreeLevel",
                "personPreparingReport",
                "accreditationBody",
            ],
        },
        {
            type: "fieldset",
            title: "Student Learning Outcome Information",
            items: [
                {
                    type: "tabarray",
                    items: [
                        {
                            type: "section",
                            legend: "SLO {{idx}}",

                            items: [
                                {
                                    key: "SLOInformation[].programSLOsSLO1",
                                },
                                {
                                    type: "checkboxes",
                                    key: "SLOInformation[].programSLOsSLO1Bloom",
                                },
                                {
                                    type: "radios",
                                    key: "SLOInformation[].programSLOsSLO1Common",
                                },
                                {
                                    type: "tabarray",

                                    items: [
                                        {
                                            type: "section",
                                            legend: "Measure {{idx}}",
                                            key: "SLOInformation[].assessmentMeasure[]",
                                        },
                                    ],
                                },
                                {
                                    title: "SLO Status - Indicate the current status of program SLOs as Met, Partially Met, Not Met, or Unknown.",
                                    type: "radios",
                                    key: "SLOInformation[].dataSLOStatus",
                                },
                                {
                                    title: "Decisions and Actions - Briefly describe specific decisions and actions related to each SLO (e.g., SLO/goal-related changes, method/process-related changes, stakeholder engagement changes, etc.).",
                                    description:
                                        "Include who (e.g., program faculty, a faculty committee, etc.) made the decision, when the decision was made (e.g., faculty retreat, faculty meeting, etc.), what data informed the decision, and a timeline for actions taken or to be taken. Furthermore, please briefly describe how your program has demonstrated continuous improvement by considering the following questions:  What are the effects of your previously stated changes from your last report?  What did you do in response to your previous assessment report feedback? How have you made progress since the last assessment report? ",
                                    key: "SLOInformation[].decisionActions",
                                },
                            ],
                        },
                    ],
                    onChange: function (evt) {},
                },
            ],
        },
        {
            key: "additionalInformation",
        },
        {
            type: "submit",
            title: "Submit",
        },
    ],

    onSubmit: function (errors, values) {
        console.log(errors)
        console.log(values)
        if (errors) {
            $("#res").html("<p>Missing Required Fields</p>")
        } else {
            $("#res").html("<p>" + JSON.stringify(values, null, 4) + "</p>")
        }
        console.log(values.studentLearningOutcomes.studentLearning.length)
    },
})

/**
 * Initial proof of concept of the new design implementing on the Non-Accredited Graduate Assessment Report. This is the portion to bind the Non-Accredited Graduate Assessment Report JSON model to the certain form using the id.
 */
$("#TestingDesign2Json").jsonForm({
    schema: {
        title: "Accredited Graduate Assessment Report",
        type: "object",
        properties: {
            college: { type: "string", title: "College" },
            program: { type: "string", title: "Program" },
            academicYear: {
                type: "string",
                title: "Academic Year of Report",
            },
            preparer: {
                type: "string",
                title: "Person Preparing the Report",
            },
            deptSchool: { type: "string", title: "Department/School" },
            degreeLevel: { type: "string", title: "Degree Level" },
            dateRange: {
                type: "string",
                title: "Date Range of Reported Data",
            },
            SLOInformation: {
                type: "tabarray",
                id: "SLOEntry",
                minItems: 1,
                items: {
                    type: "object",
                    properties: {
                        programSLOsSLO1: {
                            type: "string",
                            title: "SLO Title",
                            required: true,
                        },
                        programSLOsSLO1Bloom: {
                            title: "Bloom’s Taxonomy Cognitive Level",
                            type: "string",
                            enum: [
                                "Knowledge",
                                "Analysis",
                                "Comprehension",
                                "Synthesis",
                                "Application",
                                "Evaluation",
                            ],
                            uniqueItems: true,
                        },
                        programSLOsSLO1Common: {
                            title: "Common Graduate Program SLOs",
                            type: "string",
                            enum: [
                                "1",
                                "2",
                                "3",
                                "4",
                                "Not Applicable for SLO",
                            ],
                            uniqueItems: true,
                        },
                        assessmentMeasure: {
                            type: "tabarray",
                            title: "II. Assessment Methods",
                            items: {
                                type: "object",
                                properties: {
                                    measureTitle: {
                                        title: "Title of the Measure",
                                        type: "string",
                                    },
                                    measureDescription: {
                                        title: "Describe How the Measure Aligns to the SLO",
                                        type: "string",
                                    },
                                    measureDomain: {
                                        title: "Domain",
                                        type: "string",
                                        enum: [
                                            "Examination",
                                            "Product",
                                            "Performance",
                                        ],
                                        description: "Check all that apply",
                                        uniqueItems: true,
                                    },
                                    measureType: {
                                        title: "Type",
                                        type: "string",
                                        enum: [
                                            "Direct Measure",
                                            "Indirect Measure",
                                        ],
                                        uniqueItems: true,
                                    },
                                    measurePoint: {
                                        type: "object",
                                        properties: {
                                            measurePointInProgram: {
                                                title: "Measure Point",
                                                type: "string",
                                                enum: [
                                                    "In Final Term of Program",
                                                    "In Final Year of Program",
                                                ],
                                            },
                                            measurePointLocation: {
                                                title: "Point Description",
                                                type: "string",
                                            },
                                        },
                                    },
                                    measurePopulation: {
                                        type: "object",
                                        properties: {
                                            measurePopulationDropDown: {
                                                type: "string",
                                                title: "Population Measured Details",
                                                enum: [
                                                    "All Students",
                                                    "Sample of Students - Describe below",
                                                ],
                                            },
                                            measurePopulationDesc: {
                                                type: "string",
                                                title: "Describe here",
                                            },
                                        },

                                        uniqueItems: true,
                                    },
                                    measureDataFreq: {
                                        title: "Frequency of Data Collection",
                                        type: "string",
                                        enum: [
                                            "Once/semester",
                                            "Once/year",
                                            "Other - Describe below",
                                        ],
                                    },
                                    measureProficiencyThreshold: {
                                        title: "Proficiency Threshold",
                                        type: "string",
                                    },
                                    measureProficiencyTarget: {
                                        title: "Program Proficiency Target",
                                        type: "string",
                                    },
                                    datacollection: {
                                        type: "object",
                                        title: "Data Collection",
                                        properties: {
                                            dataResultsSLO1Range: {
                                                type: "string",
                                                title: "Data Collection Date Range",
                                            },
                                            dataResultsSLO1NumStudents: {
                                                type: "number",
                                                title: "Number of Students Assessed",
                                            },
                                            dataResultsSLO1PercStudents: {
                                                type: "string",
                                                title: "Percentage of Students who Met/Exceeded Threshold Proficiency",
                                            },
                                        },
                                        uniqueItems: true,
                                    },
                                },
                            },
                        },

                        dataSLOStatus: {
                            type: "string",
                            title: "notitle",
                            enum: [
                                "Met",
                                "Partially Met",
                                "Not Met",
                                "Unknown",
                            ],
                            uniqueItems: true,
                        },

                        decisionActions: {
                            type: "textarea",
                        },
                    },
                },
            },

            bSegment: {
                title: "B. SLOs reflect professional standards as dictated by an accreditation or other external body.",
                type: "select",
                enum: ["Yes", "No"],
            },
            cSegment: {
                title: "C. Describe how stakeholders (both internal and external) are involved in the creation and/or review of SLOs as well as how SLOs are communicated to stakeholders.",
                type: "textarea",
                description:
                    "A few examples of internal stakeholders (and communication methods) could include full-time/adjunct faculty and staff (departmental meetings or retreats), and/or current students (syllabi, advising documents, student organizations).\nSome examples of external stakeholders (and communication methods) could include prospective students (recruitment materials), alumni (advisory boards, focus groups, surveys, newsletters), employers (internship evaluation forms, focus groups, surveys, advisory boards, newsletters), and/or community members/groups (advisory boards, focus groups, surveys).",
            },
            measureComplementDirect: {
                title: "B.  Describe any indirect measures or additional data the program uses to complement the direct measures of SLOs.",
                type: "textarea",
            },
            dataResultsDescription: {
                type: "textarea",
                title: "C. Describe how results are communicated within the program. Address each SLO. If possible, please include the date(s) that Academic Program Assessment results were/will be discussed.",
            },
            additionalInformation: {
                type: "textarea",
                title: "Additional Information",
                description:
                    "OPTONAL:  Provide additional information that may be helpful to reviewers.",
            },
        },
    },
    form: [
        {
            type: "fieldset",
            title: "Reporting Details",
            expandable: false,
            items: [
                "college",
                "program",
                "academicYear",
                "preparer",
                "deptSchool",
                "degreeLevel",
                "dateRange",
            ],
        },
        {
            type: "fieldset",
            title: "Student Learning Outcome Information",
            items: [
                {
                    type: "tabarray",
                    items: [
                        {
                            type: "section",
                            legend: "SLO {{idx}}",

                            items: [
                                {
                                    key: "SLOInformation[].programSLOsSLO1",
                                },
                                {
                                    type: "checkboxes",
                                    key: "SLOInformation[].programSLOsSLO1Bloom",
                                },
                                {
                                    type: "radios",
                                    key: "SLOInformation[].programSLOsSLO1Common",
                                },
                                {
                                    type: "tabarray",

                                    items: [
                                        {
                                            type: "fieldset",
                                            legend: "Measure {{idx}}",
                                            items: [
                                                {
                                                    key: "SLOInformation[].assessmentMeasure[].measureTitle",
                                                },
                                                {
                                                    key: "SLOInformation[].assessmentMeasure[].measureDescription",
                                                },
                                                {
                                                    key: "SLOInformation[].assessmentMeasure[].measureDomain",
                                                },
                                                {
                                                    key: "SLOInformation[].assessmentMeasure[].measureType",
                                                },
                                                {
                                                    key: "SLOInformation[].assessmentMeasure[].measurePoint",
                                                },
                                                {
                                                    key: "SLOInformation[].assessmentMeasure[].measurePopulation",
                                                },
                                                {
                                                    key: "SLOInformation[].assessmentMeasure[].measureDataFreq",
                                                },
                                                {
                                                    key: "SLOInformation[].assessmentMeasure[].measureProficiencyThreshold",
                                                },
                                                {
                                                    key: "SLOInformation[].assessmentMeasure[].measureProficiencyTarget",
                                                },
                                                {
                                                    type: "tabarray",
                                                    items: [
                                                        {
                                                            legend: "Data Entry {{idx}}",
                                                            key: "SLOInformation[].assessmentMeasure[].datacollection",
                                                        },
                                                    ],
                                                },
                                            ],
                                        },
                                    ],
                                },
                                {
                                    title: "SLO Status - Indicate the current status of program SLOs as Met, Partially Met, Not Met, or Unknown.",
                                    type: "radios",
                                    key: "SLOInformation[].dataSLOStatus",
                                },
                                {
                                    title: "Decisions and Actions - Briefly describe specific decisions and actions related to each SLO (e.g., SLO/goal-related changes, method/process-related changes, stakeholder engagement changes, etc.).",
                                    description:
                                        "Include who (e.g., program faculty, a faculty committee, etc.) made the decision, when the decision was made (e.g., faculty retreat, faculty meeting, etc.), what data informed the decision, and a timeline for actions taken or to be taken. Furthermore, please briefly describe how your program has demonstrated continuous improvement by considering the following questions:  What are the effects of your previously stated changes from your last report?  What did you do in response to your previous assessment report feedback? How have you made progress since the last assessment report? ",
                                    key: "SLOInformation[].decisionActions",
                                },
                            ],
                        },
                    ],
                    onChange: function (evt) {},
                },
            ],
        },
        {
            key: "bSegment",
        },
        {
            key: "cSegment",
        },
        {
            key: "measureComplementDirect",
        },
        {
            key: "dataResultsDescription",
        },
        {
            key: "additionalInformation",
        },
        {
            type: "submit",
            title: "Submit",
        },
    ],

    onSubmit: function (errors, values) {
        console.log(errors)
        console.log(values)
        if (errors) {
            $("#res").html("<p>I beg your pardon?</p>")
        } else {
            $("#res").html(
                '<p id="returnJSON">' + JSON.stringify(values, null, 4) + "</p>"
            )
        }
        console.log(values.studentLearningOutcomes.studentLearning.length)
    },
})

/**
 * This is the portion to bind the Non-Accredited Graduate Assessment Report JSON model to the certain form using the id.
 */
$("#nonAccGradSampleJson").jsonForm({
    schema: {
        title: "Non-Accredited Graduate Assessment Report",
        type: "object",
        properties: {
            college: { type: "string", title: "College" },
            program: { type: "string", title: "Program" },
            academicYear: {
                type: "string",
                title: "Academic Year of Report",
            },
            preparer: {
                type: "string",
                title: "Person Preparing the Report",
            },
            deptSchool: { type: "string", title: "Department/School" },
            degreeLevel: { type: "string", title: "Degree Level" },
            dateRange: {
                type: "string",
                title: "Date Range of Reported Data",
            },

            studentLearningOutcomes: {
                type: "object",
                title: "I. Degree Program & Common Graduate Student Learning Outcomes (SLOs)",
                properties: {
                    aSegmentDesc: {
                        type: "hidden",
                        description:
                            "A.  Complete a table for each SLO. If an SLO is assessed by more than one measure, complete tables for each measure. Duplicate the table as needed to accommodate the number of measures. Attach copies of rubrics.",
                    },
                    studentLearning: {
                        type: "tabarray",
                        items: {
                            type: "object",
                            properties: {
                                programSLOsSLO1: {
                                    type: "string",
                                    title: "SLO Title",
                                    required: true,
                                },
                                programSLOsSLO1Bloom: {
                                    title: "Bloom’s Taxonomy Cognitive Level",
                                    type: "string",
                                    enum: [
                                        "Knowledge",
                                        "Analysis",
                                        "Comprehension",
                                        "Synthesis",
                                        "Application",
                                        "Evaluation",
                                    ],
                                    uniqueItems: true,
                                },
                                programSLOsSLO1Common: {
                                    title: "Common Graduate Program SLOs",
                                    type: "string",
                                    enum: [
                                        "1",
                                        "2",
                                        "3",
                                        "4",
                                        "Not Applicable for SLO",
                                    ],
                                    uniqueItems: true,
                                },
                            },
                        },
                    },
                    bSegment: {
                        title: "B. SLOs reflect professional standards as dictated by an accreditation or other external body.",
                        type: "select",
                        enum: ["Yes", "No"],
                    },
                    cSegment: {
                        title: "C. Describe how stakeholders (both internal and external) are involved in the creation and/or review of SLOs as well as how SLOs are communicated to stakeholders.",
                        type: "textarea",
                        description:
                            "A few examples of internal stakeholders (and communication methods) could include full-time/adjunct faculty and staff (departmental meetings or retreats), and/or current students (syllabi, advising documents, student organizations).\nSome examples of external stakeholders (and communication methods) could include prospective students (recruitment materials), alumni (advisory boards, focus groups, surveys, newsletters), employers (internship evaluation forms, focus groups, surveys, advisory boards, newsletters), and/or community members/groups (advisory boards, focus groups, surveys).",
                    },
                },
            },
            assessmentMethods: {
                type: "object",
                title: "II. Assessment Methods",
                description:
                    "A.  Complete a table for each SLO. If an SLO is assessed by more than one measure, complete tables for each measure. Duplicate the table as needed to accommodate the number of measures. Attach copies of rubrics.",
                properties: {
                    assessmentMeasure: {
                        type: "tabarray",
                        items: {
                            type: "object",
                            properties: {
                                measureTitle: {
                                    title: "Title of the Measure",
                                    type: "string",
                                },
                                measureDescription: {
                                    title: "Describe How the Measure Aligns to the SLO",
                                    type: "string",
                                },
                                measureDomain: {
                                    title: "Domain",
                                    type: "string",
                                    enum: [
                                        "Examination",
                                        "Product",
                                        "Performance",
                                    ],
                                    description: "Check all that apply",
                                    uniqueItems: true,
                                },
                                measureType: {
                                    title: "Type",
                                    type: "string",
                                    enum: [
                                        "Direct Measure",
                                        "Indirect Measure",
                                    ],
                                    uniqueItems: true,
                                },
                                measurePoint: {
                                    type: "object",
                                    properties: {
                                        measurePointInProgram: {
                                            title: "Measure Point",
                                            type: "string",
                                            enum: [
                                                "In Final Term of Program",
                                                "In Final Year of Program",
                                            ],
                                        },
                                        measurePointLocation: {
                                            title: "Point Description",
                                            type: "string",
                                        },
                                    },
                                },
                                measurePopulation: {
                                    type: "object",
                                    properties: {
                                        measurePopulationDropDown: {
                                            type: "string",
                                            title: "Population Measured Details",
                                            enum: [
                                                "All Students",
                                                "Sample of Students - Describe below",
                                            ],
                                        },
                                        measurePopulationDesc: {
                                            type: "string",
                                            title: "Describe here",
                                        },
                                    },

                                    uniqueItems: true,
                                },
                                measureDataFreq: {
                                    title: "Frequency of Data Collection",
                                    type: "string",
                                    enum: [
                                        "Once/semester",
                                        "Once/year",
                                        "Other - Describe below",
                                    ],
                                },
                                measureProficiencyThreshold: {
                                    title: "Proficiency Threshold",
                                    type: "string",
                                },
                                measureProficiencyTarget: {
                                    title: "Program Proficiency Target",
                                    type: "string",
                                },
                            },
                        },
                    },
                    measureComplementDirect: {
                        title: "B.  Describe any indirect measures or additional data the program uses to complement the direct measures of SLOs.",
                        type: "textarea",
                    },
                },
            },

            dataCollection: {
                type: "object",
                title: "III. Data Collection and Analysis",
                properties: {
                    dataResultsTable: {
                        title: "SLO Measure Table",
                        type: "tabarray",
                        description:
                            "A.    Results Table – Report results for each SLO. If an SLO was assessed by multiple measures, report data for each measure. Add rows as needed to accommodate the number of SLOs and measures.",
                        items: {
                            type: "object",
                            title: "SLO {{idx}}",
                            properties: {
                                SLOmeasure: {
                                    title: "notitle",
                                    type: "tabarray",
                                    items: {
                                        type: "object",
                                        title: "Measure {{idx}}",
                                        properties: {
                                            dataResultsSLO1Range: {
                                                type: "string",
                                                title: "Data Collection Date Range",
                                            },
                                            dataResultsSLO1NumStudents: {
                                                type: "number",
                                                title: "Number of Students Assessed",
                                            },
                                            dataResultsSLO1PercStudents: {
                                                type: "string",
                                                title: "Percentage of Students who Met/Exceeded Threshold Proficiency",
                                            },
                                        },
                                    },
                                },
                            },
                        },
                    },
                    dataSLOStatusTable: {
                        type: "object",
                        title: "B.  SLO Status Table – Based on the results reported in the above table and referring to the program proficiency target, indicate the current status of program SLOs as Met, Partially Met, Not Met, or Unknown. Add rows as needed to accommodate additional SLOs.",
                        properties: {
                            dataSLOStatustable: {
                                title: "notitle",
                                type: "tabarray",
                                items: {
                                    type: "object",
                                    title: "SLO {{idx}}",
                                    properties: {
                                        dataSLOStatus: {
                                            type: "string",
                                            title: "notitle",
                                            enum: [
                                                "Met",
                                                "Partially Met",
                                                "Not Met",
                                                "Unknown",
                                            ],
                                            uniqueItems: true,
                                        },
                                    },
                                },
                            },
                        },
                    },
                    dataResultsDescription: {
                        type: "textarea",
                        title: "C. Describe how results are communicated within the program. Address each SLO. If possible, please include the date(s) that Academic Program Assessment results were/will be discussed.",
                    },
                },
            },
            decisionsAndActions: {
                type: "tabarray",
                title: "IV. Decisions and Actions",
                description:
                    "Briefly describe specific decisions and actions related to each SLO (e.g., SLO/goal-related changes, method/process-related changes, stakeholder engagement changes, etc.). Include who (e.g., program faculty, a faculty committee, etc.) made the decision, when the decision was made (e.g., faculty retreat, faculty meeting, etc.), what data informed the decision, and a timeline for actions taken or to be taken. Furthermore, please briefly describe how your program has demonstrated continuous improvement by considering the following questions:  What are the effects of your previously stated changes from your last report?  What did you do in response to your previous assessment report feedback? How have you made progress since the last assessment report? ",

                items: {
                    type: "object",
                    title: "SLO {{idx}}",
                    properties: {
                        decisionsAndActionsSLO1: {
                            type: "string",
                            title: "SLO 1",
                        },
                    },
                },
            },

            additionalInformation: {
                type: "textarea",
                title: "V. Additional Information",
                description:
                    "OPTONAL:  Provide additional information that may be helpful to reviewers.",
            },
        },
    },
    form: [
        {
            type: "fieldset",
            title: "Reporting Details",
            expandable: false,
            items: [
                "college",
                "program",
                "academicYear",
                "preparer",
                "deptSchool",
                "degreeLevel",
                "dateRange",
            ],
        },

        {
            type: "fieldset",
            title: "I. Degree Program & Common Graduate Student Learning Outcomes (SLOs)",
            items: [
                {
                    type: "tabarray",
                    items: [
                        {
                            type: "section",
                            legend: "SLO {{idx}}",
                            items: [
                                {
                                    key: "studentLearningOutcomes.studentLearning[].programSLOsSLO1",
                                },
                                {
                                    type: "checkboxes",

                                    key: "studentLearningOutcomes.studentLearning[].programSLOsSLO1Bloom",
                                },
                                {
                                    type: "radios",

                                    key: "studentLearningOutcomes.studentLearning[].programSLOsSLO1Common",
                                },
                            ],
                        },
                    ],
                    onChange: function (evt) {
                        // console.log(evt)
                        // console.log(evt.target)
                        // console.log(evt.target.id)
                        if (
                            evt.target.id != null &&
                            evt.target.id != undefined &&
                            evt.target.id !== ""
                        ) {
                            iSLOWorking = parseInt(
                                evt.target.id
                                    .match(/studentLearning\[\d\]/)[0]
                                    .match(/\d/)[0]
                            )
                        } else {
                            iSLOWorking = 0
                        }

                        // console.log("Current SLO ID:" + iSLOWorking)
                        if (!aSLOid.includes(iSLOWorking)) {
                            aSLOid.push(iSLOWorking)
                            iSLOMax = aSLOid.length
                        }
                        // console.log("Count " + aSLOid)
                        console.log("Count max " + iSLOMax)
                    },
                },
                {
                    type: "select",
                    id: "bSegSelect",
                    key: "studentLearningOutcomes.bSegment",
                },
                {
                    id: "cSegInput",
                    key: "studentLearningOutcomes.cSegment",
                },
            ],
        },
        // {
        //     key: "assessmentMethods",
        // },
        {
            type: "fieldset",
            title: "II. Assessment Methods",
            items: [
                {
                    type: "tabarray",
                    items: [
                        {
                            type: "tabarray",
                            legend: "SLO {{idx}}",
                            items: [
                                {
                                    type: "section",
                                    legend: "Measure {{idx}}",
                                    notitle: true,
                                    items: [
                                        {
                                            key: "assessmentMethods.assessmentMeasure[].measureTitle",
                                        },
                                        {
                                            key: "assessmentMethods.assessmentMeasure[].measureDescription",
                                        },
                                        {
                                            key: "assessmentMethods.assessmentMeasure[].measureDomain",
                                            type: "checkboxes",
                                        },
                                        {
                                            key: "assessmentMethods.assessmentMeasure[].measureType",
                                        },
                                        {
                                            key: "assessmentMethods.assessmentMeasure[].measurePoint",
                                            notitle: true,
                                        },
                                        {
                                            key: "assessmentMethods.assessmentMeasure[].measurePopulation.measurePopulationDropDown",
                                        },
                                        {
                                            key: "assessmentMethods.assessmentMeasure[].measurePopulation.measurePopulationDesc",
                                        },
                                        {
                                            key: "assessmentMethods.assessmentMeasure[].measureDataFreq",
                                        },
                                        {
                                            key: "assessmentMethods.assessmentMeasure[].measureProficiencyThreshold",
                                        },
                                        {
                                            key: "assessmentMethods.assessmentMeasure[].measureProficiencyTarget",
                                        },
                                    ],
                                },
                            ],
                            onChange: function (evt) {
                                console.log(evt)
                                console.log(evt.target)
                                console.log(evt.target.id)
                                if (
                                    evt.target.id != null &&
                                    evt.target.id != undefined &&
                                    evt.target.id !== ""
                                ) {
                                    iMeasureWorking = parseInt(
                                        evt.target.id
                                            .match(/assessmentMeasure\[\d\]/)[0]
                                            .match(/\d/)[0]
                                    )
                                } else {
                                    iMeasureWorking = 0
                                }

                                if (!aMeasureid.includes(iMeasureWorking)) {
                                    aMeasureid.push(iMeasureWorking)
                                    iMeasureMax = aMeasureid.length
                                }
                                // console.log("Count " + aSLOid)
                                console.log("Count max " + iMeasureMax)
                            },
                        },
                    ],
                },
                {
                    id: "measureComplementDirect",
                    key: "assessmentMethods.measureComplementDirect",
                },
            ],
        },
        {
            type: "fieldset",
            title: "III. Data Collection and Analysis",
            items: [
                {
                    type: "tabarray",
                    legend: "Data Entry {{idx}}",
                    items: [
                        {
                            key: "dataCollection.dataResultsTable",
                        },
                    ],
                },
                {
                    key: "dataCollection.dataSLOStatusTable",
                },
                {
                    id: "dataResultsDescription",
                    key: "dataCollection.dataResultsDescription",
                },
            ],
        },

        {
            key: "decisionsAndActions",
        },
        {
            key: "additionalInformation",
        },
        {
            type: "submit",
            title: "Submit",
            id: "submitForm",
        },
    ],

    onSubmit: function (errors, values) {
        console.log(errors)
        console.log(values)
        if (errors) {
            $("#res").html("<p>I beg your pardon?</p>")
        } else {
            $("#res").html(
                '<p id="returnJSON">' + JSON.stringify(values, null, 4) + "</p>"
            )
        }
        console.log(values.studentLearningOutcomes.studentLearning.length)
    },
})

/**
 * This is the portion to bind the Accredited Graduate Assessment Report JSON model to the certain form using the id.
 */
$("#AccGradSampleJson").jsonForm({
    schema: {
        title: "Accredited Graduate Assessment Report",
        type: "object",
        properties: {
            college: { type: "string", title: "College" },
            program: { type: "string", title: "Program" },
            academicYear: {
                type: "string",
                title: "Academic Year of Report",
            },
            lastAccReview: {
                type: "string",
                title: "Last Accrededition Review",
            },
            deptSchool: { type: "string", title: "Department/School" },
            degreeLevel: { type: "string", title: "Degree Level" },
            personPreparingReport: {
                type: "string",
                title: "Person Preparing the Report",
            },
            accreditationBody: { type: "string", title: "Accreditation Body" },

            studentLearningOutcomes: {
                type: "object",
                title: "I. Degree Program & Common Graduate Student Learning Outcomes (SLOs)",
                description:
                    "List each program SLO and indicate the highest cognitive level it represents. To accommodate more than four SLOs, add rows as needed.",
                properties: {
                    studentLearning: {
                        type: "tabarray",
                        id: "SLOEntry",
                        items: {
                            type: "object",
                            properties: {
                                programSLOsSLO1: {
                                    type: "string",
                                    title: "SLO Title",
                                    required: true,
                                },
                                programSLOsSLO1Bloom: {
                                    title: "Bloom’s Taxonomy Cognitive Level",
                                    type: "string",
                                    enum: [
                                        "Knowledge",
                                        "Analysis",
                                        "Comprehension",
                                        "Synthesis",
                                        "Application",
                                        "Evaluation",
                                    ],
                                    uniqueItems: true,
                                },
                                programSLOsSLO1Common: {
                                    title: "Common Graduate Program SLOs",
                                    type: "string",
                                    enum: [
                                        "1",
                                        "2",
                                        "3",
                                        "4",
                                        "Not Applicable for SLO",
                                    ],
                                    uniqueItems: true,
                                },
                            },
                        },
                    },
                },
            },
            assessmentMethods: {
                type: "object",
                title: "II. Assessment Methods",
                description:
                    "List the assessment measures used.  For each measure, indicate the domain and how often data is collected. Add rows as needed to accommodate additional SLOs.",
                properties: {
                    assessmentMeasure: {
                        type: "tabarray",
                        title: "SLO Measurements",
                        items: {
                            type: "object",
                            title: "SLO {{idx}} Measures",
                            properties: {
                                measureTitle: {
                                    title: "Measure",
                                    type: "string",
                                },
                                measureDomain: {
                                    title: "Domain",
                                    type: "string",
                                    enum: [
                                        "Examination",
                                        "Product",
                                        "Performance",
                                    ],
                                    description: "Check all that apply",
                                    uniqueItems: true,
                                },
                                measureDataFreq: {
                                    title: "Data Collection (i.e. annually, by semester, etc.)",
                                    type: "string",
                                },
                            },
                        },
                    },
                },
            },

            dataCollection: {
                type: "object",
                title: "III. Data Analysis",
                properties: {
                    dataSLOStatusTable: {
                        type: "object",
                        title: "SLO Status Table – Indicate the current status of program SLOs as Met, Partially Met, Not Met, or Unknown.<br>Add rows as needed to accommodate additional SLOs. ",
                        properties: {
                            dataSLOStatustable: {
                                title: "notitle",
                                type: "tabarray",
                                items: {
                                    type: "object",
                                    title: "SLO {{idx}}",
                                    properties: {
                                        dataSLOStatus: {
                                            type: "string",
                                            title: "notitle",
                                            enum: [
                                                "Met",
                                                "Partially Met",
                                                "Not Met",
                                                "Unknown",
                                            ],
                                            uniqueItems: true,
                                        },
                                    },
                                },
                            },
                        },
                    },
                },
            },
            decisionsAndActions: {
                type: "tabarray",
                title: "IV. Decisions and Actions",
                description:
                    "Briefly describe specific decisions and actions related to each SLO (e.g., SLO/goal-related changes, method/process-related changes, stakeholder engagement changes, etc.). Include who (e.g., program faculty, a faculty committee, etc.) made the decision, when the decision was made (e.g., faculty retreat, faculty meeting, etc.), what data informed the decision, and a timeline for actions taken or to be taken. Furthermore, please briefly describe how your program has demonstrated continuous improvement by considering the following questions:  What are the effects of your previously stated changes from your last report?  What did you do in response to your previous assessment report feedback? How have you made progress since the last assessment report? ",

                items: {
                    type: "object",
                    title: "SLO {{idx}}",
                    properties: {
                        decisionsAndActionsSLO1: {
                            type: "string",
                            title: "SLO 1",
                        },
                    },
                },
            },

            additionalInformation: {
                type: "textarea",
                title: "V. Additional Information",
                description:
                    "OPTONAL:  Provide additional information that may be helpful to reviewers.",
            },
        },
    },
    form: [
        {
            type: "fieldset",
            title: "Reporting Details",
            expandable: false,
            items: [
                "college",
                "program",
                "academicYear",
                "lastAccReview",
                "deptSchool",
                "degreeLevel",
                "personPreparingReport",
                "accreditationBody",
            ],
        },

        {
            type: "fieldset",
            title: "I. Degree Program & Common Graduate Student Learning Outcomes (SLOs)",
            items: [
                {
                    type: "tabarray",
                    items: [
                        {
                            type: "section",
                            legend: "SLO {{idx}}",
                            items: [
                                {
                                    key: "studentLearningOutcomes.studentLearning[].programSLOsSLO1",
                                },
                                {
                                    type: "checkboxes",
                                    key: "studentLearningOutcomes.studentLearning[].programSLOsSLO1Bloom",
                                },
                                {
                                    type: "radios",
                                    key: "studentLearningOutcomes.studentLearning[].programSLOsSLO1Common",
                                },
                            ],
                        },
                    ],
                    onChange: function (evt) {},
                },
            ],
        },

        {
            key: "assessmentMethods",
        },
        {
            key: "dataCollection",
        },
        {
            key: "decisionsAndActions",
        },
        {
            key: "additionalInformation",
        },
        {
            type: "submit",
            title: "Submit",
        },
    ],

    onSubmit: function (errors, values) {
        console.log(errors)
        console.log(values)
        if (errors) {
            $("#res").html("<p>I beg your pardon?</p>")
        } else {
            $("#res").html("<p>" + JSON.stringify(values, null, 4) + "</p>")
        }
        console.log(values.studentLearningOutcomes.studentLearning.length)
    },
})

/**
 * This is the portion to bind the Non-Accredited Undergraduate Assessment Report JSON model to the certain form using the id.
 */
$("#nonAccUndGradSampleJson").jsonForm({
    schema: {
        title: "Non-Accredited Undergraduate Assessment Report",
        type: "object",
        properties: {
            college: { type: "string", title: "College" },
            program: { type: "string", title: "Program" },
            academicYear: {
                type: "string",
                title: "Academic Year of Report",
            },
            preparer: {
                type: "string",
                title: "Person Preparing the Report",
            },
            deptSchool: { type: "string", title: "Department/School" },
            degreeLevel: { type: "string", title: "Degree Level" },
            dateRange: {
                type: "string",
                title: "Date Range of Reported Data",
            },

            studentLearningOutcomes: {
                type: "object",
                title: "I. Program Student Learning Outcomes (SLOs) ",
                properties: {
                    aSegmentDesc: {
                        type: "hidden",
                        description:
                            "A.  List each program SLO and indicate the highest cognitive level it represents. To accommodate more than four SLOs, add rows as needed.",
                    },
                    studentLearning: {
                        type: "tabarray",
                        id: "SLOEntry",
                        items: {
                            type: "object",
                            properties: {
                                programSLOsSLO1: {
                                    type: "string",
                                    title: "SLO Title",
                                    required: true,
                                },
                                programSLOsSLO1Bloom: {
                                    title: "Bloom’s Taxonomy Cognitive Level",
                                    type: "string",
                                    enum: [
                                        "Knowledge",
                                        "Analysis",
                                        "Comprehension",
                                        "Synthesis",
                                        "Application",
                                        "Evaluation",
                                    ],
                                    uniqueItems: true,
                                },
                            },
                        },
                    },
                    bSegment: {
                        title: "B. SLOs reflect professional standards as dictated by an accreditation or other external body.",
                        type: "string",
                        enum: ["yes", "No"],
                    },
                    cSegment: {
                        title: "C. Describe how stakeholders (both internal and external) are involved in the creation and/or review of SLOs as well as how SLOs are communicated to stakeholders.",
                        type: "textarea",
                        description:
                            "Describe how stakeholders (both internal and external) are involved in the creation and/or review of SLOs as well as how SLOs are communicated to stakeholders.<br>A few examples of internal stakeholders (and communication methods) could include full-time/adjunct faculty and staff (departmental meetings or retreats), and/or current students (syllabi, advising documents, student organizations). <br>Some examples of external stakeholders (and communication methods) could include prospective students (recruitment materials), alumni (advisory boards, focus groups, surveys, newsletters), employers (internship evaluation forms, focus groups, surveys, advisory boards, newsletters), and/or community members/groups (advisory boards, focus groups, surveys).",
                    },
                },
            },
            assessmentMethods: {
                type: "object",
                title: "II. Assessment Methods",
                description:
                    "A.  Complete a table for each SLO. If an SLO is assessed by more than one measure, complete tables for each measure. Duplicate the table as needed to accommodate the number of measures. Attach copies of rubrics.",
                properties: {
                    assessmentMeasure: {
                        type: "tabarray",
                        title: "SLO Measurements",
                        items: {
                            type: "object",
                            title: "SLO {{idx}} Measures",
                            properties: {
                                measureTitle: {
                                    title: "Title of the Measure",
                                    type: "string",
                                },
                                measureDescription: {
                                    title: "Describe How the Measure Aligns to the SLO",
                                    type: "string",
                                },
                                measureDomain: {
                                    title: "Domain",
                                    type: "string",
                                    enum: [
                                        "Examination",
                                        "Product",
                                        "Performance",
                                    ],
                                    description: "Check all that apply",
                                    uniqueItems: true,
                                },
                                measureType: {
                                    title: "Type",
                                    type: "string",
                                    enum: [
                                        "Direct Measure",
                                        "Indirect Measure",
                                    ],
                                    uniqueItems: true,
                                },
                                measurePoint: {
                                    title: "Point In Program Assessment is Administered",
                                    type: "object",
                                    properties: {
                                        measurePointInProgram: {
                                            title: "notitle",
                                            type: "string",
                                            enum: [
                                                "In Final Term of Program",
                                                "In Final Year of Program",
                                            ],
                                        },
                                        measurePointLocation: {
                                            title: "Where does the assesment occur",
                                            type: "string",
                                        },
                                    },
                                },
                                measurePopulation: {
                                    title: "Population Measured",
                                    type: "string",
                                    enum: [
                                        "All Students",
                                        "Sample of Students - Describe below",
                                    ],
                                    uniqueItems: true,
                                },
                                measureDataFreq: {
                                    title: "Frequency of Data Collection",
                                    type: "string",
                                    enum: [
                                        "Once/semester",
                                        "Once/year",
                                        "Other - Describe below",
                                    ],
                                },
                                measureProficiencyThreshold: {
                                    title: "Proficiency Threshold",
                                    type: "string",
                                },
                                measureProficiencyTarget: {
                                    title: "Program Proficiency Target",
                                    type: "string",
                                },
                            },
                        },
                    },
                    measureComplementDirect: {
                        title: "B.  Describe any indirect measures or additional data the program uses to complement the direct measures of SLOs.",
                        type: "textarea",
                    },
                },
            },

            dataCollection: {
                type: "object",
                title: "III. Data Collection and Analysis",
                properties: {
                    dataResultsTable: {
                        title: "SLO Measure Table",
                        type: "tabarray",
                        description:
                            "A.    Results Table – Report results for each SLO. If an SLO was assessed by multiple measures, report data for each measure. Add rows as needed to accommodate the number of SLOs and measures.",
                        items: {
                            type: "object",
                            title: "SLO {{idx}}",
                            properties: {
                                SLOmeasure: {
                                    title: "notitle",
                                    type: "tabarray",
                                    items: {
                                        type: "object",
                                        title: "Measure {{idx}}",
                                        properties: {
                                            dataResultsSLO1Range: {
                                                type: "string",
                                                title: "Data Collection Date Range",
                                            },
                                            dataResultsSLO1NumStudents: {
                                                type: "number",
                                                title: "Number of Students Assessed",
                                            },
                                            dataResultsSLO1PercStudents: {
                                                type: "string",
                                                title: "Percentage of Students who Met/Exceeded Threshold Proficiency",
                                            },
                                        },
                                    },
                                },
                            },
                        },
                    },
                    dataSLOStatusTable: {
                        type: "object",
                        title: "B.  SLO Status Table",
                        description:
                            "Based on the results reported in the above table and referring to the program proficiency target, indicate the current status of program SLOs as Met, Partially Met, Not Met, or Unknown.<br>Add rows as needed to accommodate additional SLOs.",
                        properties: {
                            dataSLOStatustable: {
                                title: "notitle",
                                type: "tabarray",
                                items: {
                                    type: "object",
                                    title: "SLO #",
                                    properties: {
                                        dataSLOStatus: {
                                            type: "string",
                                            title: "notitle",
                                            enum: [
                                                "Met",
                                                "Partially Met",
                                                "Not Met",
                                                "Unknown",
                                            ],
                                            uniqueItems: true,
                                        },
                                    },
                                },
                            },
                        },
                    },
                    dataResultsDescription: {
                        type: "textarea",
                        title: "C. Describe how results are communicated within the program. Address each SLO. If possible, please include the date(s) that Academic Program Assessment results were/will be discussed.",
                    },
                },
            },
            decisionsAndActions: {
                type: "tabarray",
                title: "IV. Decisions and Actions",
                description:
                    "Briefly describe specific decisions and actions related to each SLO (e.g., SLO/goal-related changes, method/process-related changes, stakeholder engagement changes, etc.). Include who (e.g., program faculty, a faculty committee, etc.) made the decision, when the decision was made (e.g., faculty retreat, faculty meeting, etc.), what data informed the decision, and a timeline for actions taken or to be taken. Furthermore, please briefly describe how your program has demonstrated continuous improvement by considering the following questions:  What are the effects of your previously stated changes from your last report?  What did you do in response to your previous assessment report feedback? How have you made progress since the last assessment report? ",

                items: {
                    type: "object",
                    title: "SLO {{idx}}",
                    properties: {
                        decisionsAndActionsSLO1: {
                            type: "string",
                            title: "SLO 1",
                        },
                    },
                },
            },

            additionalInformation: {
                type: "textarea",
                title: "V. Additional Information",
                description:
                    "OPTONAL:  Provide additional information that may be helpful to reviewers.",
            },
        },
    },
    form: [
        {
            type: "fieldset",
            title: "Reporting Details",
            expandable: false,
            items: [
                "college",
                "program",
                "academicYear",
                "preparer",
                "deptSchool",
                "degreeLevel",
                "dateRange",
            ],
        },

        {
            type: "fieldset",
            title: "I. Degree Program & Common Graduate Student Learning Outcomes (SLOs)",
            items: [
                {
                    type: "tabarray",
                    items: [
                        {
                            type: "section",
                            legend: "SLO {{idx}}",
                            items: [
                                {
                                    key: "studentLearningOutcomes.studentLearning[].programSLOsSLO1",
                                },
                                {
                                    type: "checkboxes",
                                    key: "studentLearningOutcomes.studentLearning[].programSLOsSLO1Bloom",
                                },
                            ],
                        },
                    ],
                    onChange: function (evt) {},
                },
                {
                    type: "radios",
                    key: "studentLearningOutcomes.bSegment",
                },
                {
                    key: "studentLearningOutcomes.cSegment",
                },
            ],
        },
        {
            key: "assessmentMethods",
        },
        {
            key: "dataCollection",
        },
        {
            key: "decisionsAndActions",
        },
        {
            key: "additionalInformation",
        },
        {
            type: "submit",
            title: "Submit",
        },
    ],

    onSubmit: function (errors, values) {
        console.log(errors)
        console.log(values)
        if (errors) {
            $("#res").html("<p>I beg your pardon?</p>")
        } else {
            $("#res").html("<p>" + JSON.stringify(values, null, 4) + "</p>")
        }
        console.log(values.studentLearningOutcomes.studentLearning.length)
    },
})

/**
 * This is the portion to bind the Accredited Undergraduate Assessment Report JSON model to the certain form using the id.
 */
$("#AccUndGradSampleJson").jsonForm({
    schema: {
        title: "Accredited Undergraduate Assessment Report Template",
        type: "object",
        properties: {
            college: { type: "string", title: "College" },
            program: { type: "string", title: "Program" },
            academicYear: {
                type: "string",
                title: "Academic Year of Report",
            },
            lastAccReview: {
                type: "string",
                title: "Last Accrededition Review",
            },
            deptSchool: { type: "string", title: "Department/School" },
            degreeLevel: { type: "string", title: "Degree Level" },
            personPreparingReport: {
                type: "string",
                title: "Person Preparing the Report",
            },
            accreditationBody: { type: "string", title: "Accreditation Body" },

            studentLearningOutcomes: {
                type: "object",
                title: "I. Degree Program & Common Graduate Student Learning Outcomes (SLOs)",
                description:
                    "List each program SLO and indicate the highest cognitive level it represents. To accommodate more than four SLOs, add rows as needed.",
                properties: {
                    studentLearning: {
                        type: "tabarray",
                        id: "SLOEntry",
                        items: {
                            type: "object",
                            properties: {
                                programSLOsSLO1: {
                                    type: "string",
                                    title: "SLO Title",
                                    required: true,
                                },
                                programSLOsSLO1Bloom: {
                                    title: "Bloom’s Taxonomy Cognitive Level",
                                    type: "string",
                                    enum: [
                                        "Knowledge",
                                        "Analysis",
                                        "Comprehension",
                                        "Synthesis",
                                        "Application",
                                        "Evaluation",
                                    ],
                                    uniqueItems: true,
                                },
                            },
                        },
                    },
                },
            },
            assessmentMethods: {
                type: "object",
                title: "II. Assessment Methods",
                description:
                    "List the assessment measures used.  For each measure, indicate the domain and how often data is collected. Add rows as needed to accommodate additional SLOs.",
                properties: {
                    assessmentMeasure: {
                        type: "tabarray",
                        title: "SLO Measurements",
                        items: {
                            type: "object",
                            title: "SLO {{idx}} Measures",
                            properties: {
                                measureTitle: {
                                    title: "Measure",
                                    type: "string",
                                },
                                measureDomain: {
                                    title: "Domain",
                                    type: "string",
                                    enum: [
                                        "Examination",
                                        "Product",
                                        "Performance",
                                    ],
                                    description: "Check all that apply",
                                    uniqueItems: true,
                                },
                                measureDataFreq: {
                                    title: "Data Collection (i.e. annually, by semester, etc.)",
                                    type: "string",
                                },
                            },
                        },
                    },
                },
            },

            dataCollection: {
                type: "object",
                title: "III. Data Analysis",
                properties: {
                    dataSLOStatusTable: {
                        type: "object",
                        title: "SLO Status Table",
                        description:
                            "Based on the results reported in the above table and referring to the program proficiency target, indicate the current status of program SLOs as Met, Partially Met, Not Met, or Unknown.<br>Add rows as needed to accommodate additional SLOs.",
                        properties: {
                            dataSLOStatustable: {
                                title: "notitle",
                                type: "tabarray",
                                items: {
                                    type: "object",
                                    title: "SLO {{idx}}",
                                    properties: {
                                        dataSLOStatus: {
                                            type: "string",
                                            title: "notitle",
                                            enum: [
                                                "Met",
                                                "Partially Met",
                                                "Not Met",
                                                "Unknown",
                                            ],
                                            uniqueItems: true,
                                        },
                                    },
                                },
                            },
                        },
                    },
                },
            },
            decisionsAndActions: {
                type: "tabarray",
                title: "IV. Decisions and Actions",
                description:
                    "Briefly describe specific decisions and actions related to each SLO (e.g., SLO/goal-related changes, method/process-related changes, stakeholder engagement changes, etc.). Include who (e.g., program faculty, a faculty committee, etc.) made the decision, when the decision was made (e.g., faculty retreat, faculty meeting, etc.), what data informed the decision, and a timeline for actions taken or to be taken. Furthermore, please briefly describe how your program has demonstrated continuous improvement by considering the following questions:  What are the effects of your previously stated changes from your last report?  What did you do in response to your previous assessment report feedback? How have you made progress since the last assessment report? ",

                items: {
                    type: "object",
                    title: "SLO {{idx}}",
                    properties: {
                        decisionsAndActionsSLO1: {
                            type: "string",
                            title: "SLO 1",
                        },
                    },
                },
            },

            additionalInformation: {
                type: "textarea",
                title: "V. Additional Information",
                description:
                    "OPTONAL:  Provide additional information that may be helpful to reviewers.",
            },
        },
    },
    form: [
        {
            type: "fieldset",
            title: "Reporting Details",
            expandable: false,
            items: [
                "college",
                "program",
                "academicYear",
                "lastAccReview",
                "deptSchool",
                "degreeLevel",
                "personPreparingReport",
                "accreditationBody",
            ],
        },

        {
            type: "fieldset",
            title: "I. Degree Program & Common Graduate Student Learning Outcomes (SLOs)",
            items: [
                {
                    type: "tabarray",
                    items: [
                        {
                            type: "section",
                            legend: "SLO {{idx}}",
                            items: [
                                {
                                    key: "studentLearningOutcomes.studentLearning[].programSLOsSLO1",
                                },
                                {
                                    type: "checkboxes",
                                    key: "studentLearningOutcomes.studentLearning[].programSLOsSLO1Bloom",
                                },
                            ],
                        },
                    ],
                    onChange: function (evt) {},
                },
            ],
        },
        {
            key: "assessmentMethods",
        },
        {
            key: "dataCollection",
        },
        {
            key: "decisionsAndActions",
        },
        {
            key: "additionalInformation",
        },
        {
            type: "submit",
            title: "Submit",
            id: "submitForm",
        },
    ],

    onSubmit: function (errors, values) {
        console.log(errors)
        console.log(values)
        if (errors) {
            $("#res").html("<p>I beg your pardon?</p>")
        } else {
            $("#res").html(
                '<p id="returnJSON">' + JSON.stringify(values, null, 4) + "</p>"
            )
        }
        console.log(values.studentLearningOutcomes.studentLearning.length)
    },
})

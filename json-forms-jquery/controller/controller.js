var iSLOCount = 0
$("#jsonform").jsonForm({
    schema: {
        title: "Non-Accredited Graduate Assessment Report Template",
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
                        type: "array",
                        title: "SLO Entries",
                        items: {
                            type: "object",
                            title: "SLO#",
                            properties: {
                                programSLOsSLO1: {
                                    type: "string",
                                    title: "SLO#",
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
                        type: "string",
                        enum: ["yes", "No"],
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
                        type: "array",
                        title: "SLO Measurements",
                        items: {
                            type: "object",
                            title: "SLO# Measures",
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
                                            title: "notitle",
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
                        type: "array",
                        description:
                            "A.    Results Table – Report results for each SLO. If an SLO was assessed by multiple measures, report data for each measure. Add rows as needed to accommodate the number of SLOs and measures.",
                        items: {
                            type: "object",
                            title: "SLO#",
                            properties: {
                                SLOmeasure: {
                                    title: "notitle",
                                    type: "array",
                                    items: {
                                        type: "object",
                                        title: "Measure #",
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
                                type: "array",
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
                type: "object",
                title: "IV. Decisions and Actions",
                description:
                    "Briefly describe specific decisions and actions related to each SLO (e.g., SLO/goal-related changes, method/process-related changes, stakeholder engagement changes, etc.). Include who (e.g., program faculty, a faculty committee, etc.) made the decision, when the decision was made (e.g., faculty retreat, faculty meeting, etc.), what data informed the decision, and a timeline for actions taken or to be taken. Furthermore, please briefly describe how your program has demonstrated continuous improvement by considering the following questions:  What are the effects of your previously stated changes from your last report?  What did you do in response to your previous assessment report feedback? How have you made progress since the last assessment report? ",

                properties: {
                    decisionsAndActionsSLO1: {
                        type: "string",
                        title: "SLO 1",
                    },
                    decisionsAndActionsSLO2: {
                        type: "string",
                        title: "SLO 2",
                    },
                    decisionsAndActionsSLO3: {
                        type: "string",
                        title: "SLO 3",
                    },
                    decisionsAndActionsSLO4: {
                        type: "string",
                        title: "SLO 4",
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
            key: "studentLearningOutcomes",
            onChange: function (evt) {
                // iSLOCount = $(evt.target).studentLearning.length;
                // console.log(evt.currentTarget);
                console.log(
                    $(
                        evt.target.parentElement.parentElement.parentElement
                            .parentElement.parentElement.childElementCount
                    )
                );
            },
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
            type: "button",
            title: "Submit",
            onClick: function (evt){
                console.log(evt.target);
                evt.target.submit;
            }
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

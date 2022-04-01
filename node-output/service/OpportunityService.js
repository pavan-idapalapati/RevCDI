"use strict";

const moment = require("moment");

/**
 * opportunities Page Meta data
 *
 * returns inline_response_200_2
 **/
exports.dashboardMetaData = function () {
  return new Promise(function (resolve, reject) {
    var examples = {};
    examples["application/json"] = {
      data: {
        potentialRevenue: {
          wRVU: "14.9",
          value: "$738",
        },
        statusCounts: [
          {
            statusId: 1,
            count: allOpportunities.filter((ele) => ele.status === 1).length,
          },
          {
            statusId: 2,
            count: allOpportunities.filter((ele) => ele.status === 2).length,
          },
          {
            statusId: 3,
            count: allOpportunities.filter((ele) => ele.status === 3).length,
          },
          {
            statusId: 4,
            count: allOpportunities.filter((ele) => ele.status === 4).length,
          },
        ],
      },
    };
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
};

/**
 * Find all opportunities
 *
 * body Object  (optional)
 * returns inline_response_200
 **/

const randomDate = () => {
  const startDateTime = moment("01-May-2021", "DD-MMM-YYYY").valueOf();
  const endDateTime = moment("31-Dec-2021", "DD-MMM-YYYY").valueOf();
  const date = startDateTime + Math.random() * (endDateTime - startDateTime);
  return moment(date).format("DD-MMM-YYYY");
};

const allOpportunities = [
  {
    chartId: 1,
    opportunities: [
      {
        category: "Critical Care: Insufficient critical care statement",
        comment:
          "Patient appears to be partially responding or appears to have minor complication.",
        peerReviewRequest: null,
        charts: [
          {
            name: "Main notes",
            url: "https://demo.divami.com/revcdi2/PotentialCriticalCare.pdf",
          },
          {
            name: "Lab notes",
            url: "https://demo.divami.com/revcdi2/PotentialCriticalCareAlsoCodingAdd.pdf",
          },
        ],
        groupId: 1,
      },
    ],
    patientInfo: {
      firstName: "Andrew",
      lastName: "Lange",
      age: "39",
      gender: "M",
      dateOfService: "24-May-2021",
      lastModifiedDate: randomDate(),
    },
    educationalTips: [],
    status: 1,
  },
  {
    chartId: 2,
    opportunities: [
      {
        category: "Critical Care: Insufficient treatment documentation",
        comment:
          "Patient appears to be unstable or has developed a significant complication or appears to have a significant new problem",
        peerReviewRequest: {
          firstName: "M.",
          lastName: "Singh",
          designation: "MD",
          imageUrl: "",
        },
        charts: [
          {
            name: "Main notes",
            url: "https://demo.divami.com/revcdi2/EDCaseMDM.pdf",
          },
          {
            name: "Lab notes",
            url: "https://demo.divami.com/revcdi2/PotentialCriticalCareAlsoCodingAdd.pdf",
          },
        ],
        groupId: 1,
      },
    ],
    patientInfo: {
      firstName: "Owen",
      lastName: "Andrea",
      age: "34",
      gender: "F",
      dateOfService: "18-Jun-2021",
      lastModifiedDate: randomDate(),
    },
    educationalTips: [],
    status: 1,
  },
  {
    chartId: 3,
    opportunities: [
      {
        category: "Critical Care: Missing critical care statement",
        comment:
          "This is a potential critical care case based on the documentation of acute hypokalemia and lactic acidosis that have been managed with IV potassium chloride and IV Vancomycin to prevent further deterioration of the patient",
        peerReviewRequest: null,
        charts: [
          {
            name: "Main notes",
            url: "https://demo.divami.com/revcdi2/UCCase1MDMDocumentation.pdf",
          },
          {
            name: "Lab notes",
            url: "https://demo.divami.com/revcdi2/PotentialCriticalCareAlsoCodingAdd.pdf",
          },
        ],
        groupId: 1,
      },
      {
        category:
          "Discretionary Procedures: Inadequate Obs times documentation",
        comment: "Missing Procedure Note.",
        peerReviewRequest: null,
        charts: [
          {
            name: "Main notes",
            url: "https://demo.divami.com/revcdi2/UrgentCareChart2MissedEKGInterpretation.pdf",
          },
          {
            name: "Lab notes",
            url: "https://demo.divami.com/revcdi2/PotentialCriticalCareAlsoCodingAdd.pdf",
          },
        ],
        groupId: 2,
      },
      {
        category: "Incomplete Charts: Missing signature",
        comment: "Please sign the chart.",
        peerReviewRequest: null,
        charts: [
          {
            name: "Main notes",
            url: "https://demo.divami.com/revcdi2/PotentialCriticalCare.pdf",
          },
          {
            name: "Lab notes",
            url: "https://demo.divami.com/revcdi2/PotentialCriticalCareAlsoCodingAdd.pdf",
          },
        ],
        groupId: 3,
      },
    ],
    patientInfo: {
      firstName: "Roxanne",
      lastName: "Rohana",
      age: "32",
      gender: "F",
      dateOfService: "01-Jul-2021",
      lastModifiedDate: randomDate(),
    },

    educationalTips: [
      {
        label: "Educational Tips: E&M - Review of System",
        description:
          "Patient appears to be partially responding or appears to have minor complication",
        isHelpful: null,
      },
    ],
    status: 1,
  },
  {
    chartId: 4,
    opportunities: [],
    patientInfo: {
      firstName: "Derek",
      lastName: "Poliski",
      age: "42",
      gender: "F",
      dateOfService: "23-Jul-2021",
      lastModifiedDate: randomDate(),
    },
    educationalTips: [
      {
        label: "Educational Tips: E&M - Review of Systems missing",
        description:
          "The chart qualifies for 99285 but was down-coded to a 99284 because of an incomplete review of systems. 10 systems",
        isHelpful: null,
      },
    ],
    status: 1,
  },
  {
    chartId: 5,
    opportunities: [
      {
        category:
          "Incomplete Charts: Missing / Inadequate Note - Missing progress note",
        comment: "Missing progress note.",
        peerReviewRequest: null,
        charts: [
          {
            name: "Main notes",
            url: "https://demo.divami.com/revcdi2/UrgentCareChart2MissedEKGInterpretation.pdf",
          },
          {
            name: "Lab notes",
            url: "https://demo.divami.com/revcdi2/PotentialCriticalCareAlsoCodingAdd.pdf",
          },
        ],
        groupId: 3,
      },
    ],
    patientInfo: {
      firstName: "Shereen",
      lastName: "Abakus",
      age: "51",
      gender: "M",
      dateOfService: "05-Aug-2021",
      lastModifiedDate: randomDate(),
    },
    educationalTips: [],
    status: 1,
  },
  {
    chartId: 6,
    opportunities: [
      {
        category:
          "Discretionary Procedures: Prospective Counselling/Procedure Time - Missing Obs admit time",
        comment: "Missing Procedure Note.",
        peerReviewRequest: null,
        charts: [
          {
            name: "Main notes",
            url: "https://demo.divami.com/revcdi2/PotentialCriticalCare.pdf",
          },
          {
            name: "Lab notes",
            url: "https://demo.divami.com/revcdi2/PotentialCriticalCareAlsoCodingAdd.pdf",
          },
        ],
        groupId: 2,
      },
    ],
    patientInfo: {
      firstName: "Stacey",
      lastName: "Santo",
      age: "23",
      gender: "F",
      dateOfService: "12-Jun-2021",
      lastModifiedDate: randomDate(),
    },
    educationalTips: [],
    status: 1,
  },
  {
    chartId: 7,
    opportunities: [
      {
        category:
          "Discretionary Procedures: Prospective Counselling/Procedure Time - Missing Obs admit time",
        comment: "Missing I&D documentation.",
        peerReviewRequest: null,
        charts: [
          {
            name: "Main notes",
            url: "https://demo.divami.com/revcdi2/UCCase1MDMDocumentation.pdf",
          },
          {
            name: "Lab notes",
            url: "https://demo.divami.com/revcdi2/PotentialCriticalCareAlsoCodingAdd.pdf",
          },
        ],
        groupId: 2,
      },
    ],
    patientInfo: {
      firstName: "Perter",
      lastName: "Hamm",
      age: "32",
      gender: "M",
      dateOfService: "27-Aug-2021",
      lastModifiedDate: randomDate(),
    },
    educationalTips: [],
    status: 1,
  },
  {
    chartId: 8,
    opportunities: [
      {
        category:
          "Incomplete Charts: Missing / Inadequate Note - Missing initial assessment",
        comment: "Missing ED Documentation.",
        peerReviewRequest: null,
        charts: [
          {
            name: "Main notes",
            url: "https://demo.divami.com/revcdi2/PotentialCriticalCare.pdf",
          },
          {
            name: "Lab notes",
            url: "https://demo.divami.com/revcdi2/PotentialCriticalCareAlsoCodingAdd.pdf",
          },
        ],
        groupId: 3,
      },
    ],
    patientInfo: {
      firstName: "George",
      lastName: "Helmsma",
      age: "56",
      gender: "M",
      dateOfService: "05-Aug-2021",
      lastModifiedDate: randomDate(),
    },
    educationalTips: [],
    status: 1,
  },
  {
    chartId: 9,
    opportunities: [
      {
        category: "Incomplete Charts: Signatures - Missing co-signature",
        comment: "Please sign the chart.",
        peerReviewRequest: null,
        charts: [
          {
            name: "Main notes",
            url: "https://demo.divami.com/revcdi2/PotentialCriticalCare.pdf",
          },
          {
            name: "Lab notes",
            url: "https://demo.divami.com/revcdi2/PotentialCriticalCareAlsoCodingAdd.pdf",
          },
        ],
        groupId: 3,
      },
    ],
    patientInfo: {
      firstName: "Gina",
      lastName: "Mallina",
      age: "42",
      gender: "F",
      dateOfService: "17-Jul-2021",
      lastModifiedDate: randomDate(),
    },
    educationalTips: [],
    status: 1,
  },
  {
    chartId: 10,
    opportunities: [],
    patientInfo: {
      firstName: "Patty",
      lastName: "Hollander",
      age: "36",
      gender: "F",
      dateOfService: "05-Aug-2021",
      lastModifiedDate: randomDate(),
    },
    educationalTips: [
      {
        label: "Educational Tips: E&M - History of Present Illness missing",
        description:
          "The chart was down-coded to a 99284 because of an incomplete review of systems. Documented 8 systems in History of present illness but 10 are required to be reviewed and documented to get credit for a 99285.",
        isHelpful: null,
      },
    ],
    status: 1,
  },
  {
    chartId: 11,
    opportunities: [],
    patientInfo: {
      firstName: "Ebru",
      lastName: "Tevrizci",
      age: "34",
      gender: "F",
      dateOfService: "16-Jun-2021",
      lastModifiedDate: randomDate(),
    },
    educationalTips: [
      {
        label: "Educational Tips: E&M - Physical Exam incomplete",
        description:
          "The chart qualifies for 99285 but was down-coded to a 99284 because of an incomplete review of systems. 10 systems are required to be reviewed and documented for a 99285.",
        isHelpful: null,
      },
    ],
    status: 1,
  },
  {
    chartId: 12,
    opportunities: [
      {
        category:
          "Critical Care: Potential Critical Care - Insufficient critical care statement",
        comment:
          "Patient appears to be partially responding or appears to have a minor complication.",
        peerReviewRequest: null,
        charts: [
          {
            name: "Main notes",
            url: "https://demo.divami.com/revcdi2/UCCase1MDMDocumentation.pdf",
          },
          {
            name: "Lab notes",
            url: "https://demo.divami.com/revcdi2/PotentialCriticalCareAlsoCodingAdd.pdf",
          },
        ],
        groupId: 1,
      },
    ],
    patientInfo: {
      firstName: "Aby",
      lastName: "Chris",
      age: "23",
      gender: "F",
      dateOfService: "19-Jun-2021",
      lastModifiedDate: randomDate(),
    },
    educationalTips: [],
    status: 1,
  },
  {
    chartId: 13,
    opportunities: [
      {
        category:
          "Critical Care: Potential Critical Care - Insufficient critical care statement",
        comment:
          "Patient appears to be partially responding or appears to have a minor complication.",
        peerReviewRequest: null,
        charts: [
          {
            name: "Main notes",
            url: "https://demo.divami.com/revcdi2/PotentialCriticalCare.pdf",
          },
          {
            name: "Lab notes",
            url: "https://demo.divami.com/revcdi2/PotentialCriticalCareAlsoCodingAdd.pdf",
          },
        ],
        groupId: 1,
      },
    ],
    patientInfo: {
      firstName: "Aby2",
      lastName: "Chris2",
      age: "23",
      gender: "F",
      dateOfService: "19-Jun-2021",
      lastModifiedDate: randomDate(),
    },
    educationalTips: [],
    status: 2,
  },
  {
    chartId: 14,
    opportunities: [
      {
        category:
          "Critical Care: Potential Critical Care - Insufficient critical care statement",
        comment:
          "Patient appears to be partially responding or appears to have a minor complication.",
        peerReviewRequest: null,
        charts: [
          {
            name: "Main notes",
            url: "https://demo.divami.com/revcdi2/PotentialCriticalCare.pdf",
          },
          {
            name: "Lab notes",
            url: "https://demo.divami.com/revcdi2/PotentialCriticalCareAlsoCodingAdd.pdf",
          },
        ],
        groupId: 1,
      },
    ],
    patientInfo: {
      firstName: "Aby3",
      lastName: "Chris3",
      age: "23",
      gender: "F",
      dateOfService: "19-Jun-2021",
      lastModifiedDate: randomDate(),
    },
    educationalTips: [],
    status: 2,
  },
  {
    chartId: 15,
    opportunities: [
      {
        category:
          "Critical Care: Potential Critical Care - Insufficient critical care statement",
        comment:
          "Patient appears to be partially responding or appears to have a minor complication.",
        peerReviewRequest: null,
        charts: [
          {
            name: "Main notes",
            url: "https://demo.divami.com/revcdi2/PotentialCriticalCare.pdf",
          },
          {
            name: "Lab notes",
            url: "https://demo.divami.com/revcdi2/PotentialCriticalCareAlsoCodingAdd.pdf",
          },
        ],
        groupId: 1,
      },
    ],
    patientInfo: {
      firstName: "Aby4",
      lastName: "Chris4",
      age: "23",
      gender: "F",
      dateOfService: "19-Jun-2021",
      lastModifiedDate: randomDate(),
    },
    educationalTips: [],
    status: 2,
  },
  {
    chartId: 16,
    opportunities: [
      {
        category:
          "Critical Care: Potential Critical Care - Insufficient critical care statement",
        comment:
          "Patient appears to be partially responding or appears to have a minor complication.",
        peerReviewRequest: null,
        charts: [
          {
            name: "Main notes",
            url: "https://demo.divami.com/revcdi2/PotentialCriticalCare.pdf",
          },
          {
            name: "Lab notes",
            url: "https://demo.divami.com/revcdi2/PotentialCriticalCareAlsoCodingAdd.pdf",
          },
        ],
        groupId: 1,
      },
    ],
    patientInfo: {
      firstName: "Aby5",
      lastName: "Chris5",
      age: "23",
      gender: "F",
      dateOfService: "19-Jun-2021",
      lastModifiedDate: randomDate(),
    },
    educationalTips: [],
    status: 2,
  },
  {
    chartId: 17,
    opportunities: [
      {
        category:
          "Critical Care: Potential Critical Care - Insufficient critical care statement",
        comment:
          "Patient appears to be partially responding or appears to have a minor complication.",
        peerReviewRequest: null,
        charts: [
          {
            name: "Main notes",
            url: "https://demo.divami.com/revcdi2/PotentialCriticalCare.pdf",
          },
          {
            name: "Lab notes",
            url: "https://demo.divami.com/revcdi2/PotentialCriticalCareAlsoCodingAdd.pdf",
          },
        ],
        groupId: 1,
      },
    ],
    patientInfo: {
      firstName: "Aby6",
      lastName: "Chris6",
      age: "23",
      gender: "F",
      dateOfService: "19-Jun-2021",
      lastModifiedDate: randomDate(),
    },
    educationalTips: [],
    status: 2,
  },
  {
    chartId: 18,
    opportunities: [],
    patientInfo: {
      firstName: "Aby7",
      lastName: "Chris7",
      age: "23",
      gender: "F",
      dateOfService: "19-Jun-2021",
      lastModifiedDate: randomDate(),
    },
    educationalTips: [
      {
        label: "Educational Tips: E&M - Physical Exam incomplete",
        description:
          "The chart qualifies for 99285 but was down-coded to a 99284 because of an incomplete review of systems. 10 systems are required to be reviewed and documented for a 99285.",
        isHelpful: null,
      },
    ],
    status: 3,
  },
  {
    chartId: 19,
    opportunities: [],
    patientInfo: {
      firstName: "Samuel",
      lastName: "Robert",
      age: "23",
      gender: "F",
      dateOfService: "19-Jun-2021",
      lastModifiedDate: randomDate(),
    },
    educationalTips: [
      {
        label: "Educational Tips: E&M - Physical Exam incomplete",
        description:
          "The chart qualifies for 99285 but was down-coded to a 99284 because of an incomplete review of systems. 10 systems are required to be reviewed and documented for a 99285.",
        isHelpful: null,
      },
    ],
    status: 3,
  },
  {
    chartId: 20,
    opportunities: [],
    patientInfo: {
      firstName: "Patt",
      lastName: "Chris",
      age: "23",
      gender: "F",
      dateOfService: "19-Jun-2021",
      lastModifiedDate: randomDate(),
    },
    educationalTips: [
      {
        label: "Educational Tips: E&M - Physical Exam incomplete",
        description:
          "The chart qualifies for 99285 but was down-coded to a 99284 because of an incomplete review of systems. 10 systems are required to be reviewed and documented for a 99285.",
        isHelpful: null,
      },
    ],
    status: 3,
  },
  {
    chartId: 21,
    opportunities: [],
    patientInfo: {
      firstName: "Stephen",
      lastName: "Jr",
      age: "23",
      gender: "F",
      dateOfService: "19-Jun-2021",
      lastModifiedDate: randomDate(),
    },
    educationalTips: [
      {
        label: "Educational Tips: E&M - Physical Exam incomplete",
        description:
          "The chart qualifies for 99285 but was down-coded to a 99284 because of an incomplete review of systems. 10 systems are required to be reviewed and documented for a 99285.",
        isHelpful: null,
      },
    ],
    status: 3,
  },
  {
    chartId: 22,
    opportunities: [],
    patientInfo: {
      firstName: "Bruce",
      lastName: "Ben",
      age: "23",
      gender: "F",
      dateOfService: "19-Jun-2021",
      lastModifiedDate: randomDate(),
    },
    educationalTips: [
      {
        label: "Educational Tips: E&M - Physical Exam incomplete",
        description:
          "The chart qualifies for 99285 but was down-coded to a 99284 because of an incomplete review of systems. 10 systems are required to be reviewed and documented for a 99285.",
        isHelpful: null,
      },
    ],
    status: 3,
  },
  {
    chartId: 23,
    opportunities: [
      {
        category: "Critical Care: Insufficient treatment documentation",
        comment:
          "Patient appears to be unstable or has developed a significant complication or appears to have a significant new problem",
        peerReviewRequest: null,
        charts: [
          {
            name: "Main notes",
            url: "https://demo.divami.com/revcdi2/PotentialCriticalCare.pdf",
          },
          {
            name: "Lab notes",
            url: "https://demo.divami.com/revcdi2/PotentialCriticalCareAlsoCodingAdd.pdf",
          },
        ],
        groupId: 1,
      },
    ],
    patientInfo: {
      firstName: "Peter",
      lastName: "Griffin",
      age: "34",
      gender: "F",
      dateOfService: "18-Jun-2021",
      lastModifiedDate: randomDate(),
    },
    educationalTips: [],
    status: 4,
  },
  {
    chartId: 24,
    opportunities: [
      {
        category: "Critical Care: Insufficient treatment documentation",
        comment:
          "Patient appears to be unstable or has developed a significant complication or appears to have a significant new problem",
        peerReviewRequest: null,
        charts: [
          {
            name: "Main notes",
            url: "https://demo.divami.com/revcdi2/PotentialCriticalCare.pdf",
          },
          {
            name: "Lab notes",
            url: "https://demo.divami.com/revcdi2/PotentialCriticalCareAlsoCodingAdd.pdf",
          },
        ],
        groupId: 1,
      },
    ],
    patientInfo: {
      firstName: "Lois",
      lastName: "Jade",
      age: "34",
      gender: "F",
      dateOfService: "18-Jun-2021",
      lastModifiedDate: randomDate(),
    },
    educationalTips: [],
    status: 4,
  },
  {
    chartId: 25,
    opportunities: [
      {
        category: "Critical Care: Insufficient treatment documentation",
        comment:
          "Patient appears to be unstable or has developed a significant complication or appears to have a significant new problem",
        peerReviewRequest: null,
        charts: [
          {
            name: "Main notes",
            url: "https://demo.divami.com/revcdi2/PotentialCriticalCare.pdf",
          },
          {
            name: "Lab notes",
            url: "https://demo.divami.com/revcdi2/PotentialCriticalCareAlsoCodingAdd.pdf",
          },
        ],
        groupId: 1,
      },
    ],
    patientInfo: {
      firstName: "Brian",
      lastName: "Box",
      age: "34",
      gender: "F",
      dateOfService: "18-Jun-2021",
      lastModifiedDate: randomDate(),
    },
    educationalTips: [],
    status: 4,
  },
];
exports.findAllOpportunities = function (body) {
  const getMassagedResponse = (filteredResponse) => {
    return filteredResponse.map((each) => {
      if (each.opportunities.length > 1) {
        return {
          ...each,
          educationalTips: body.groupId === 4 ? each.educationalTips : [],
          opportunities: each.opportunities.filter(
            (ele) => ele.groupId === body.groupId
          ),
        };
      }
      return {
        ...each,
        educationalTips: body.groupId === 4 ? each.educationalTips : [],
      };
    });
  };

  const getFilteredData = () => {
    if (!body.group) {
      if (body.criteria.status.includes(5)) return allOpportunities;
      return allOpportunities.filter((ele) =>
        body.criteria.status.includes(ele.status)
      );
    }
    if (body.group === "Category") {
      if (body.criteria.status.includes(5)) {
        return getMassagedResponse(
          allOpportunities.filter((each) =>
            body.groupId === 4
              ? each.educationalTips.length
              : each.opportunities.some((ele) => ele.groupId === body.groupId)
          )
        );
      }
      if (body.groupId === 4) {
        return allOpportunities
          .filter(
            (each) =>
              body.criteria.status.includes(each.status) &&
              each.educationalTips.length
          )
          .map((each) => {
            return {
              ...each,
              opportunities: [],
            };
          });
      }
      const currentGroupIdOpportunities = allOpportunities.filter(
        (each) =>
          body.criteria.status.includes(each.status) &&
          each.opportunities.some((ele) => ele.groupId === body.groupId)
      );

      return getMassagedResponse(currentGroupIdOpportunities);
    }
    return allOpportunities;
  };

  const getAdditionallyFilteredData = (filteredData) => {
    const additionalFilters = body.criteria?.filters;
    if (
      additionalFilters[0].fieldType === "Date" &&
      (additionalFilters[0].field === "DOS" ||
        additionalFilters[0].field === "Last Modified")
    ) {
      const [startDate, endDate] = additionalFilters[0].value.split(",");
      return filteredData.filter((ele) => {
        const dos =
          additionalFilters[0].field === "DOS"
            ? ele.patientInfo.dateOfService
            : ele.patientInfo.lastModifiedDate;
        return (
          moment(dos, "DD-MMM-YYYY").isSameOrAfter(
            moment(startDate, "DD-MMM-YYYY")
          ) &&
          moment(dos, "DD-MMM-YYYY").isSameOrBefore(
            moment(endDate, "DD-MMM-YYYY")
          )
        );
      });
    }
    return filteredData;
  };
  const getResponseData = () => {
    let filteredData = getFilteredData();
    if (body.criteria?.filters?.length) {
      filteredData = getAdditionallyFilteredData(filteredData);
    }
    return filteredData;
  };
  const responseData = getResponseData();

  return new Promise(function (resolve, reject) {
    var examples = {};
    examples["application/json"] = {
      data: responseData,
      page: {
        perPageRecords: 10,
        page: 1,
        totalRecords: responseData.length,
      },
    };
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
};

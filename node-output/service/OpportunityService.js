"use strict";

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
            count: 12,
          },
          {
            statusId: 2,
            count: 652,
          },
          {
            statusId: 3,
            count: 7,
          },
          {
            statusId: 4,
            count: 18,
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
exports.findAllOpportunities = function (body) {
  function* generateId() {
    let id = 6;
    while (true) {
      yield {
        chartId: id,
        opportunities: [
          {
            category: "Critical Care: Insufficient critical care statement",
            comment:
              "Patient appears to be partially responding or appears to have minor complication.",
            peerReviewRequest: null,
            charts: [
              {
                name: "Main notes",
                url: "/revcdi2/samplePdf.pdf",
              },
              {
                name: "Lab notes",
                url: "/revcdi2/samplePdf.pdf",
              },
            ],
          },
        ],
        patientInfo: {
          firstName: "Andrew",
          lastName: "Lange",
          age: "39",
          gender: "M",
          dateOfService: "24-May-2021",
        },
        educationalTips: [],
      };
      id++;
    }
  }

  const generatorInstance = generateId();
  let tempData = [];
  for (let i = 0; i < 50; i++) {
    const temp = generatorInstance.next().value;
    tempData = [...tempData, temp];
  }

  return new Promise(function (resolve, reject) {
    var examples = {};
    examples["application/json"] = {
      data: [
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
                  url: "/revcdi2/samplePdf.pdf",
                },
                {
                  name: "Lab notes",
                  url: "/revcdi2/samplePdf.pdf",
                },
              ],
            },
          ],
          patientInfo: {
            firstName: "Andrew",
            lastName: "Lange",
            age: "39",
            gender: "M",
            dateOfService: "24-May-2021",
          },
          educationalTips: [],
        },
        {
          chartId: 2,
          opportunities: [
            {
              category: "Critical care overstated",
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
                  url: "/revcdi2/samplePdf.pdf",
                },
                {
                  name: "Lab notes",
                  url: "/revcdi2/samplePdf.pdf",
                },
              ],
            },
          ],
          patientInfo: {
            firstName: "Owen",
            lastName: "Andrea",
            age: "34",
            gender: "F",
            dateOfService: "18-Jun-2021",
          },
          educationalTips: [],
        },
        {
          chartId: 3,
          opportunities: [
            {
              category: "Critical Care: Insufficient critical care statement",
              comment: "Patient appears to be unstable or h",
              peerReviewRequest: null,
              charts: [
                {
                  name: "Main notes",
                  url: "/revcdi2/samplePdf.pdf",
                },
                {
                  name: "Lab notes",
                  url: "/revcdi2/samplePdf.pdf",
                },
              ],
            },
            {
              category:
                "Discretionary Procedures: Missing laceration repair note",
              comment: "Patient appears to be unstable or h",
              peerReviewRequest: null,
              charts: [
                {
                  name: "Main notes",
                  url: "/revcdi2/samplePdf.pdf",
                },
                {
                  name: "Lab notes",
                  url: "/revcdi2/samplePdf.pdf",
                },
              ],
            },
            {
              category: "Incomplete Charts: Missing signature",
              comment: "Patient appears to be unstable or h",
              peerReviewRequest: null,
              charts: [
                {
                  name: "Main notes",
                  url: "/revcdi2/samplePdf.pdf",
                },
                {
                  name: "Lab notes",
                  url: "/revcdi2/samplePdf.pdf",
                },
              ],
            },
          ],
          patientInfo: {
            firstName: "Roxanne",
            lastName: "Rohana",
            age: "32",
            gender: "F",
            dateOfService: "01-Jul-2021",
          },

          educationalTips: [
            {
              label: "Educational Tips: E&M - Review of System",
              description:
                "Patient appears to be partially responding or appears to have minor complication",
              isHelpful: null,
            },
          ],
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
          },
          educationalTips: [
            {
              label: "Educational Tips: E&M - Review of Systems missing",
              description:
                "The chart qualifies for 99285 but was down-coded to a 99284 because of an incomplete review of systems. 10 systems",
              isHelpful: null,
            },
          ],
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
                  url: "/revcdi2/samplePdf.pdf",
                },
                {
                  name: "Lab notes",
                  url: "/revcdi2/samplePdf.pdf",
                },
              ],
            },
          ],
          patientInfo: {
            firstName: "Shereen",
            lastName: "Abakus",
            age: "51",
            gender: "M",
            dateOfService: "05-Aug-2021",
          },
          educationalTips: [
            {
              label:
                "Educational Tips: E&M - History of Present Illness missing",
              description:
                "The chart was down-coded to a 99284 because of an incomplete review of systems. Documented 8 systems in History of present illness but 10 are required to be reviewed and documented to get credit for a 99285.",
              isHelpful: null,
            },
          ],
        },
        ...tempData,
      ],
      page: {
        perPageRecords: 10,
        page: 1,
        totalRecords: 55,
      },
    };
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
};

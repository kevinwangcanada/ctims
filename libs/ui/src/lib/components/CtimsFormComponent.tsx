import {CtimsFormComponentProps} from "../interface/CtimsFormComponentProps";
import {RjsfGridFieldTemplate} from "../custom-rjsf-templates/RjsfGridFieldTemplate";
import CtimsObjectFieldTemplate from "../custom-rjsf-templates/CtimsObjectFieldTemplate";
import CtimsItemObjectFieldTemplate from "../custom-rjsf-templates/CtimsItemObjectFieldTemplate";
import CtimsArrayFieldSingleTemplate from "../custom-rjsf-templates/CtimsArrayFieldSingleTemplate";
import {JSONSchema7} from "json-schema";
import CtimsArrayFieldItemTemplate from "../custom-rjsf-templates/CtimsArrayFieldItemTemplate";
import CtimsArrayFieldTemplate from "../custom-rjsf-templates/CtimsArrayFieldTemplate";
import localValidator from "@rjsf/validator-ajv8";
import {CSSProperties, ForwardedRef, forwardRef, memo} from "react";
import {withTheme} from "@rjsf/core";
import {Theme as PrimeTheme} from "../primereact";
import {RegistryWidgetsType} from "@rjsf/utils";
import CtimsInput from "../custom-rjsf-templates/CtimsInput";
import CtimsDropdown from "../custom-rjsf-templates/CtimsDropdown";
import CtimsMatchingCriteriaWidget from "../custom-rjsf-templates/CtimsMatchingCriteriaWidget";
import CtimsCheckboxWidget from "../custom-rjsf-templates/CtimsCheckbox";

const Form = withTheme(PrimeTheme)

const widgets: RegistryWidgetsType = {
  TextWidget: CtimsInput,
  SelectWidget: CtimsDropdown
}

const containerStyle: CSSProperties = {
  width: '100%',
}

const CtimsFormComponent = forwardRef((props: CtimsFormComponentProps, ref: ForwardedRef<any>) => {

  const schema = {
    "type": "object",
    "properties": {
      "trialInformation": {
        "required": [
          "trial_id",
          "nickname",
          "principal_investigator",
          "ctml_status",
          "long_title",
          "short_title",
          "phase",
          "disease_status",
          "prior_treatment_requirements",
          "protocol_no",
          "nct_purpose"
        ],
        "type": "object",
        "properties": {
          "trial_id": {
            "type": "string",
            "title": "Trial ID"
          },
          "nickname": {
            "type": "string",
            "title": "Nickname"
          },
          "principal_investigator": {
            "type": "string",
            "title": "Principal Investigator"
          },
          "ctml_status": {
            "type": "string",
            "title": "Ctml Status",
            "enum": [
              "Draft",
              "In Review",
              "Complete"
            ]
          },
          "long_title": {
            "type": "string",
            "title": "Long Title"
          },
          "short_title": {
            "type": "string",
            "title": "Short Title"
          },
          "phase": {
            "type": "string",
            "title": "Phase",
            "enum": [
              "I",
              "II",
              "III",
              "IV"
            ],
          },
          "disease_status": {
            "type": "string",
            "title": "Disease Status"
          },
          "prior_treatment_requirements": {
            "type": "string",
            "title": "Prior Treatment Requirements"
          },
          "protocol_no": {
            "type": "string",
            "title": "Protocol Number"
          },
          "nct_purpose": {
            "type": "string",
            "title": "NCT Purpose"
          }
        },
        "title": "Trial Information"
      },
      "drugList": {
        "type": "object",
        "properties": {
          "drug": {
            "type": "array",
            "items": {
              "type": "object",
              "required": ["drug_name"],
              "properties": {
                "drug_name": {
                  "type": "string",
                  "title": "Drug Name"
                }
              }
            },
            "title": "Drug"
          }
        },
        "title": "Drug List"
      },
      "management_group_list": {
        "type": "object",
        "properties": {
          "managementGroup": {
            "type": "array",
            "items": {
              "type": "object",
              "required": ["management_group_name"],
              "properties": {
                "management_group_name": {
                  "type": "string",
                  "title": "Management Group Name"
                },
                "is_primary": {
                  "type": "string",
                  "enum": [
                    "Y",
                    "N"
                  ],
                  "title": "This is a primary management group"
                },
              }
            },
            "title": "Management Group"
          }
        },
        "title": "Management Group List"
      },
      "site_list": {
        "type": "object",
        "properties": {
          "site": {
            "type": "array",
            "items": {
              "type": "object",
              "required": ["site_name", "site_status"],
              "properties": {
                "site_name": {
                  "type": "string",
                  "title": "Site Name"
                },
                "site_status": {
                  "type": "string",
                  "title": "Site Status"
                },
                "coordinating_center": {
                  "type": "string",
                  "enum": [
                    "Y",
                    "N"
                  ],
                  "title": "This site is a coordinating center."
                },
                "uses_cancer_center_irb": {
                  "type": "string",
                  "enum": [
                    "Y",
                    "N"
                  ],
                  "title": "This site uses cancer center IRB."
                },
              }
            },
            "title": "Site"
          }
        },
        "title": "Site List"
      },
      "sponsor_list": {
        "type": "object",
        "properties": {
          "sponsor": {
            "type": "array",
            "items": {
              "type": "object",
              "required": ["sponsor_name"],
              "properties": {
                "sponsor_name": {
                  "type": "string",
                  "title": "Sponsor Name"
                },
                "is_principal_sponsor": {
                  "type": "string",
                  "enum": [
                    "Y",
                    "N"
                  ],
                  "title": "This sponsor is a principal sponsor."
                },
              }
            },
            "title": "Sponsor"
          }
        },
        "title": "Sponsor List"
      },
      "staff_list": {
        "type": "object",
        "properties": {
          "protocol_staff": {
            "type": "array",
            "items": {
              "type": "object",
              "required": ["first_name", "last_name", "email", "institution_name", "staff_role"],
              "properties": {
                "first_name": {
                  "type": "string",
                  "title": "First Name"
                },
                "last_name": {
                  "type": "string",
                  "title": "Last Name"
                },
                "email": {
                  "type": "string",
                  "title": "Email"
                },
                "institution_name": {
                  "type": "string",
                  "title": "Institution Name"
                },
                "staff_role": {
                  "type": "string",
                  "title": "Staff Role"
                }
              },
              'title': 'Protocol Staff'
            },
            "title": "Protocol Staff"
          }
        },
        "title": "Staff List"
      },
      "treatment_list": {
        "type": "object",
        "properties": {
          "step": {
            "type": "array",
            "items": {
              "type": "object",
              "properties": {
                "arm": {
                  "type": "array",
                  "items": {
                    "type": "object",
                    "required": ["arm_code", "arm_description", "arm_internal_id"],
                    "properties": {
                      "arm_code": {"type": "string", "title": 'Arm Code'},
                      "arm_description": {"type": "string", "title": 'Arm Description'},
                      "arm_internal_id": {"type": "integer", "title": 'Arm Internal Id'},
                      "arm_suspended": {"type": "string", "title": 'Arm is suspended'},
                      "dose_level": {
                        "type": "array",
                        "title": 'Dose Level',
                        "items": {
                          "type": "object",
                          "required": ["level_code", "level_description", "level_internal_id"],
                          "properties": {
                            "level_code": {"type": "string", "title": 'Level Code'},
                            "level_description": {"type": "string", "title": 'Level Description'},
                            "level_internal_id": {"type": "integer", "title": 'Level Internal Id'},
                            "level_suspended": {"type": "string", "title": "This level is suspended"},
                          }
                        }
                      },
                      "match": {
                        "type": 'object',
                        "title": '',
                        "properties": {
                          "matchingCriteriaWidget": {type: 'string', title: 'Matching Criteria Widget'},
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        },
        "title": "Treatment List"
      }
    }
  }
  const uiSchema = {
    "ui:spacing": 16,
    "ui:submitButtonOptions": {
      "norender": true,
    },
    "ui:layout": [
      {
        "trialInformation": {
          "span": 24
        }
      },
      {
        "drugList": {
          "span": 24
        }
      },
      {
        "management_group_list": {
          "span": 24
        }
      },
      {
        "site_list": {
          "span": 24
        }
      },
      {
        "sponsor_list": {
          "span": 24
        }
      },
      {
        "staff_list": {
          "span": 24
        }
      },
      {
        "prior_treatment_requirements": {
          "span": 24
        }
      }
    ],
    "trialInformation": {
      "ui:ObjectFieldTemplate": RjsfGridFieldTemplate,
      "ui:spacing": 16,
      "ui:layout": [
        {
          "trial_id": {
            "span": 24
          }
        },
        {
          "nickname": {
            "span": 24
          }
        },
        {
          "principal_investigator": {
            "span": 24
          }
        },
        {
          "ctml_status": {
            "span": 24
          }
        },
        {
          "long_title": {
            "span": 24
          }
        },
        {
          "short_title": {
            "span": 24
          }
        },
        {
          "phase": {
            "span": 24
          }
        },
        {
          "disease_status": {
            "span": 24
          }
        },
        {
          "prior_treatment_requirements": {
            "span": 24
          }
        },
        {
          "protocol_no": {
            "span": 24
          }
        },
        {
          "nct_purpose": {
            "span": 24
          }
        }
      ]
    },
    "drugList": {
      "ui:ObjectFieldTemplate": CtimsObjectFieldTemplate,
      "ui:spacing": 16,
      "ui:layout": [
        {
          "drug": {
            "span": 24
          },
          "ui:order": [
            "drug"
          ]
        }
      ],
      "drug": {
        "items": {
          "ui:ObjectFieldTemplate": CtimsItemObjectFieldTemplate,
          "ui:spacing": 16,
          "ui:layout": [
            {
              "drug_name": {
                "span": 24
              },
              "ui:order": [
                "drug_name"
              ]
            }
          ]
        }
      }
    },
    "management_group_list": {
      "ui:ObjectFieldTemplate": CtimsObjectFieldTemplate,
      "ui:spacing": 16,
      "ui:layout": [
        {
          "managementGroup": {
            "span": 24
          },
          "ui:order": [
            "managementGroup"
          ]
        }
      ],
      "managementGroup": {
        "items": {
          "ui:ObjectFieldTemplate": CtimsItemObjectFieldTemplate,
          "ui:spacing": 16,
          "is_primary": {
            "ui:widget": CtimsCheckboxWidget
          },
          "ui:layout": [
            {
              "is_primary": {
                "span": 12
              },
              "ui:order": [
                "is_primary",
                "management_group_name"
              ],
              "management_group_name": {
                "span": 12
              }
            }
          ]
        }
      }
    },
    "site_list": {
      "ui:ObjectFieldTemplate": CtimsObjectFieldTemplate,
      "ui:spacing": 16,
      "ui:layout": [
        {
          "site": {
            "span": 24
          },
          "ui:order": [
            "site"
          ]
        }
      ],
      "site": {
        "items": {
          "ui:ObjectFieldTemplate": CtimsItemObjectFieldTemplate,
          "ui:spacing": 16,
          "ui:layout": [
            {
              "coordinating_center": {
                "span": 12
              },
              "uses_cancer_center_irb": {
                "span": 12
              }
            },
            {
              "site_name": {
                "span": 12
              },
              "site_status": {
                "span": 12
              }
            }
          ],
          "coordinating_center": {
            "ui:widget": CtimsCheckboxWidget
          },
          "uses_cancer_center_irb": {
            "ui:widget": CtimsCheckboxWidget
          }
        }
      }
    },
    "sponsor_list": {
      "ui:ObjectFieldTemplate": CtimsObjectFieldTemplate,
      "ui:spacing": 16,
      "ui:layout": [
        {
          "sponsor": {
            "span": 24
          }
        }
      ],
      "sponsor": {
        "items": {
          "ui:ObjectFieldTemplate": CtimsItemObjectFieldTemplate,
          "ui:spacing": 16,
          "ui:layout": [
            {
              "is_principal_sponsor": {
                "span": 12
              },
              "sponsor_name": {
                "span": 12
              }
            }
          ],
          "is_principal_sponsor": {
            "ui:widget": CtimsCheckboxWidget
          }
        }
      }
    },
    "staff_list": {
      "ui:ObjectFieldTemplate": CtimsObjectFieldTemplate,
      "ui:spacing": 16,
      "ui:layout": [
        {
          "protocol_staff": {
            "span": 24
          }
        }
      ],
      "protocol_staff": {
        "items": {
          "ui:ObjectFieldTemplate": CtimsItemObjectFieldTemplate,
          "ui:spacing": 16,
          "ui:layout": [
            {
              "first_name": {
                "span": 12
              },
              "last_name": {
                "span": 12
              }
            },
            {
              "email": {
                "span": 24
              }
            },
            {
              "institution_name": {
                "span": 24
              }
            },
            {
              "staff_role": {
                "span": 24
              }
            }
          ]
        }
      }
    },
    "prior_treatment_requirements": {
      "ui:ArrayFieldTemplate": CtimsArrayFieldSingleTemplate,
    },
    "treatment_list": {
      "ui:ObjectFieldTemplate": CtimsObjectFieldTemplate,
      "step": {
        "items": {
          "ui:ObjectFieldTemplate": CtimsItemObjectFieldTemplate,
          "arm": {
            "items": {
              "ui:ObjectFieldTemplate": CtimsItemObjectFieldTemplate,
              "arm_suspended": {
                "ui:widget": CtimsCheckboxWidget
              },
              "match": {
                matchingCriteriaWidget: {
                  "ui:widget": CtimsMatchingCriteriaWidget,
                  onClick: (e: any, formData: any, armCode: string, id: string) => {
                    e.preventDefault();
                    props.onSpecialButtonClick(formData, armCode, id);
                  },
                },
              },
              "dose_level": {
               "items": {
                  "ui:ObjectFieldTemplate": CtimsItemObjectFieldTemplate,
                 "level_suspended": {
                    "ui:widget": CtimsCheckboxWidget
                 }
               }
              }
            }
          }
        }
      }
    },

  }

  const handleSubmit = (e: any) => {
    console.log(e);
  };

  const onError = (e: any) => {
    console.log(e);
  }

  return (
    <div style={containerStyle}>
      <Form ref={ref} schema={schema as JSONSchema7}
            templates={{
              ArrayFieldItemTemplate: CtimsArrayFieldItemTemplate,
              ArrayFieldTemplate: CtimsArrayFieldTemplate,
            }}
            // liveValidate
            onChange={(data) => {
              // onChangeTest(data)
              props.onRjsfFormChange(data)
            }} // @ts-ignore
            onError={(data) => {onError(data)}}
            uiSchema={uiSchema}
            widgets={widgets}
            onSubmit={(data) => {
              handleSubmit(data.formData)
            }} validator={localValidator}/>
    </div>
  )
});

// prevent component from re-rendering
const CtimsFormComponentMemo = memo(CtimsFormComponent, (prevProps: any, nextProps: any) => true);
export default CtimsFormComponentMemo;

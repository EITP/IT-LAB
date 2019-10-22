/**
 * This is the entry file for backend server service (for server-side validation and data conversion)
 */
import { pdf, xml, flattenToStringMap, validateForm } from 'govhk-form-core';
import moment from 'moment';
import get from 'lodash/get';
import '../l10n';
import steps from '../steps';

export default {
  convert: ({ form, submit, data }, dataTypes) => {
    // const i = i18nByLocale(form.locale);
// console.log(JSON.stringify(data));
    const mapping = {
    };
// console.log(JSON.stringify(mapping));
    return [
      // pdf.concat(
      //   [
      //     pdf.defaultAck(form, submit),
          // pdf.merge({
          //   file: `${form.formId}.pdf`,
          //   mapping,
          // }),
      //   ],
      //   `${submit.trnId}_${submit.submitTime.replace(/[ :]/g, '-')}.pdf`
      // ),
      xml.convert({ form, submit, data }, dataTypes, `${form.formId}.xml`),
    ];
  },
  validate: (submission, setResult) => {
    // console.log(JSON.stringify(submission.data));
    validateForm(submission, steps).then((result) => {
      setResult(result);
    });
  },
};

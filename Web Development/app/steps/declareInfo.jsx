/* eslint react/prop-types: 0 */
import React from 'react';
import { Section, Field, Message, PersonalInfo } from 'govhk-form-core';

export default {
  title: ({ i }) => i`step.declareStep`,
  content: ({ i }) => (
    <div>
      <Section title={i`section.declareSection`}>
        <p>
          {i`declare.p1`}<b><u><i>{i`declare.p2`}</i></u></b>{i`declare.p3`}<br /><br />
          <blockquote><b><i>{i`declare.addr1`}</i></b><br />
          <b><i>{i`declare.addr2`}</i></b><br />
          <b><i>{i`declare.addr3`}</i></b><br />
          <b><i>{i`declare.addr4`}</i></b></blockquote><br />
          {i`declare.confirm`}<br /><br />
          <Field.Checkbox required name="declareTrue" label={i`declare.true`} />
          <Field.Checkbox required name="declareNotCopy" label={i`declare.notcopy`} />
          <Field.Checkbox required name="declareCommit" label={i`declare.commit`} />
          {/* <ul>
            <b>- {i`declare.commitFst`}</b><br />
            <b>- {i`declare.commitSec`}</b>
          </ul> */}

        </p>
{/* 
        <Field.Text name="schoolNameEng" label={i`school.schoolName`} size="50" />
        <PersonalInfo.FullName id="principalNameEng" name="principalNameEng" label={i`school.principalNameEng`}/>   */}

      </Section>
    </div>
  ),
};

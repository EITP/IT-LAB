/* eslint react/prop-types: 0 */
import React from 'react';
import { Section, Field } from 'govhk-form-core';

export default {
  title: ({ i }) => i`step.additionalStep`,
  content: ({ i }) => (
    <div>
      <Section title={i`section.planSection`}>
        <Section title={i`section.additionalSection`}>
          <Field.Textarea name="additionalinfo" rows={5} cols={40} check={{ maxLength: 350 }} />
          <br/><br/>
          <Field.File
            name="additionalfile"
            label={i`section.additionalfile`}
            check={{
              fileExt: ['doc', 'docx', 'pdf', 'zip'],
              fileSize: '10 MB',
            }}
          />

        </Section>
      </Section>
    </div>
  ),
};

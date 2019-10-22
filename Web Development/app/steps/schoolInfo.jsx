/* eslint react/prop-types: 0 */
import React from 'react';
import { Section, CompositeField, Field, PersonalInfo, Layout, Validate, Message } from 'govhk-form-core';
import formToValidation from './validation';
import formToCommon from './common';

const formValidation = formToValidation;
const common = formToCommon;


export default {
  title: ({ i }) => i`step.schoolStep`,
  content: ({ i }) => (
    <div>
      <Section title={i`section.schoolSection`}>
        <CompositeField label={i`school.schoolName`} layout="compact" required>
          <div style={{ position: 'relative', display: 'inline-block' }}>
            <Field.AutoComplete label={i`school.schoolNameEng`} placeholder={i`school.schoolNameEng`} name="schoolNameEng" id="schoolNameEng" size="40" required check={{ charset: 'alphanumeric' }} dataSource={common.schoolEng} stepName="step1" relatedMatches={common.schoolNameMatch} />
          </div>
          <div style={{ position: 'relative', display: 'inline-block' }}>
            <Field.AutoComplete label={i`school.schoolNameChi`} placeholder={i`school.schoolNameChi`} name="schoolNameChi" id="schoolNameChi" size="40" required dataSource={common.schoolChi} stepName="step1" relatedMatches={common.schoolNameMatch} />
          </div>
        </CompositeField>
        <Message type="info" title={i`school.schoolCode`}>
          {i`school.schoolCodeNote`}
        </Message>
        <Layout.Inline>
          <Field.AutoComplete name="schoolCode" label={i`school.schoolCode`} size="8" check={{ maxLength: 6, minLength: 6 }} dataSource={common.schoolCode} stepName="step1" relatedMatches={common.schoolCodeMatch} />
          <Field.Dropdown
            required
            name="schoolType"
            label={i`school.schoolType`}
            options={[
              { value: 'Government', label: i`school.type.government` },
              { value: 'Aided', label: i`school.type.aided` },
              { value: 'Caput', label: i`school.type.caput` },
              { value: 'Direct Subsidy Scheme', label: i`school.type.dss` },
            ]}
          />
        </Layout.Inline>
        <Field.Textarea name="schoolAddr" label={i`school.schoolAddr`} required rows={3} cols={40} check={{ maxLength: 300 }} />
        <Field.Text name="schoolWeb" label={i`school.schoolWeb`} size="40" check={{ required: true, maxLength: 200, pattern: common.urlPattern }} />

        <CompositeField label={i`school.principal`} layout="sibling" required>
          <Field.Dropdown
            required
            name="principalTitle" id="principalTitle" label={i`school.principalTitle`}
            options={common.titleOptions(i)}
          />
          <PersonalInfo.SurnameGivenName id="principalNameEng" name="principalNameEng" label={i`school.principalNameEng`} size="15" check={{ charset: 'alphanumeric' }} required />
          {/* <PersonalInfo.FullName id="principalNameEng" name="principalNameEng" label={i`school.principalNameEng`} size="15" check={{ charset: 'alphanumeric' }} required /> */}
          <PersonalInfo.ChiFullName id="principalNameChi" name="principalNameChi" label={i`school.principalNameChi`} size="13" check={{ maxLength: 6, charset: 'chinese' }} />
        </CompositeField>

        <Layout.Inline>
          <Field.Text name="schoolPhone" label={i`school.schoolPhone`} size="8" required check={{ minLength: 8, maxLength: 8, charset: 'digits' }} />
          <Field.Text name="schoolFax" label={i`school.schoolFax`} size="8" required check={{ minLength: 8, maxLength: 8, charset: 'digits' }} />
        </Layout.Inline>

        <PersonalInfo.Email id="schoolEmail" name="schoolEmail" placeholder={i`errors.errEmail`} label={i`school.schoolEmail`} required size="40" />
        <Validate fields="schoolEmail" test={formValidation.checkEmail} messages={formValidation.checkEmailMsg} />
        <CompositeField label={i`school.pic`} layout="sibling" required>
          <Field.Dropdown
            required
            name="picTitle" id="picTitle" label={i`school.picTitle`}
            options={common.titleOptions(i)}
          />
          <PersonalInfo.SurnameGivenName id="picNameEng" name="picNameEng" label={i`school.picNameEng`} size="15" check={{ charset: 'alphanumeric' }} required />
          {/* <PersonalInfo.FullName id="picNameEng" name="picNameEng" label={i`school.picNameEng`} size="15" check={{ charset: 'alphanumeric' }} required /> */}
          <PersonalInfo.ChiFullName id="picNameChi" name="picNameChi" label={i`school.picNameChi`} size="13" check={{ maxLength: 6, charset: 'chinese' }} />
        </CompositeField>
        <Field.Text name="picPost" label={i`school.picPost`} check={{ maxLength: 200 }} required size="40"/>
        <Layout.Inline>
          <Field.Text name="picPhone" label={i`school.picPhone`} size="8" required check={{ minLength: 8, maxLength: 8, charset: 'digits' }} />
          <Field.Text name="picFax" label={i`school.picFax`} size="8" required check={{ minLength: 8, maxLength: 8, charset: 'digits' }} />
        </Layout.Inline>
        <Layout.Inline>
          <PersonalInfo.Email id="picEmail" name="picEmail" placeholder={i`errors.errEmail`} label={i`school.picEmail`} required size="40" />
          <Validate 
            fields="picEmail" 
            test={formValidation.checkEmail} messages={formValidation.checkEmailMsg}
          />
          <PersonalInfo.Email id="picAlterEmail" name="picAlterEmail" placeholder={i`school.EmailDiffMsg`} label={i`school.picAlterEmail`} size="40" />
          <Validate
            fields={['picEmail', 'picAlterEmail']}
            test={formValidation.compareEmail} messages={formValidation.compareEmailMsg}
          />
        </Layout.Inline>
      </Section>
    </div>
  ),
};

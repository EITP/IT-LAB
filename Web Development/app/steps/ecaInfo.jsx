/* eslint react/prop-types: 0 */
import React from 'react';
import { Section, Field, FieldList, Condition, CompositeField, Validate } from 'govhk-form-core';
import formToValidation from './validation';
import formToCommon from './common';

const formValidation = formToValidation;
const common = formToCommon;


export default {
  title: ({ i }) => i`step.ecaStep`,
  content: ({ i }) => (
    <div>
      <Section title={i`section.planSection`}>
        <Section title={i`section.ecaSection`}>
          <p> {i`eca.p1`}</p>
          <br />
          <FieldList name="listOfECA" maxItems={50}>
            <CompositeField label={i`eca.ecaName`} layout="compact" required>
              <Field.Text name="ecaNameEng" label={i`eca.ecaNameEng`} check={{ charset: 'alphanumeric', maxLength: 140 }} size="40" required />
              <Field.Text name="ecaNameChi" label={i`eca.ecaNameChi`} check={{ maxLength: 40 }} size="40" required />
            </CompositeField>
            <Field.Textarea required name="ecaDesc" label={i`eca.ecaDesc`} rows={6} cols={40} check={{ maxLength: 400 }} />
            <Field.SelectMultiple
              required
              name="ecaTech"
              label={i`eca.ecaTech`}
              options={[
                { value: 'Artificial Intelligence (AI)', label: i`eca.tech.01` },
                { value: 'Big Data', label: i`eca.tech.02` },
                { value: 'Blockchain', label: i`eca.tech.03` },
                { value: 'Cloud Computing', label: i`eca.tech.04` },
                { value: 'Coding / Algorithm', label: i`eca.tech.05` },
                { value: 'Computational Thinking', label: i`eca.tech.06` },
                { value: 'Cyber Security', label: i`eca.tech.07` },
                { value: 'Drone Coding', label: i`eca.tech.08` },
                { value: 'Game Design and Development', label: i`eca.tech.09` },
                { value: 'IoT Coding', label: i`eca.tech.10` },
                { value: 'Mobile App Development', label: i`eca.tech.11` },
                { value: 'Robotics Coding', label: i`eca.tech.12` },
                { value: 'Virtual Reality (VR) / Augmented Reality (AR)', label: i`eca.tech.13` },
                { value: 'Web Development', label: i`eca.tech.14` },
                {
                  value: 'Others',
                  label: i`eca.tech.15`,
                  view: () => (
                    <Field.Text name="ecaTechOther" placeholder="Please specify" size="50" required check={{ maxLength: 50 }} style={{ maxWidth: '50%' }} />
                  ),
                },
                { value: 'N/A', label: i`eca.tech.16` },
              ]}
              check={{
                minItems: 1,
                maxItems: 5,
              }}
            />
            <Field.SelectMultiple
              required
              name="ecaPriObj"
              label={i`eca.ecaPriObj`}
              options={[
                { value: 'Cultivate students’ interest in IT', label: i`eca.priobj.01` },
                { value: 'Enable students to keep abreast of new technologies', label: i`eca.priobj.02` },
                { value: 'Enable students to understand further study in IT', label: i`eca.priobj.03` },
                { value: 'Broaden students’ exposure to the IT industry and career', label: i`eca.priobj.04` },
                { value: 'Enhance student’s computational thinking skills', label: i`eca.priobj.05` },
                { value: 'Enhance student’s ability to apply the IT knowledge and skills learnt', label: i`eca.priobj.06` },
                { value: 'Foster student’s innovative abilities', label: i`eca.priobj.07` },
                { value: 'Foster an IT learning atmosphere at school', label: i`eca.priobj.08` },
                { value: 'Solicit the support from parents for their children to further study or pursue career in IT or tech entrepreneurs', label: i`eca.priobj.09` },
                { value: 'Enrich students’ learning experience e.g. competitions, visits, project learning, etc.', label: i`eca.priobj.10` },
                {
                  value: 'Others',
                  label: i`eca.priobj.11`,
                  view: () => (
                    <Field.Text name="ecaPriObjOther" placeholder="Please specify" size="50" required check={{ maxLength: 50 }} style={{ maxWidth: '50%' }} />
                  ),
                },
              ]}
              check={{
                minItems: 1,
                maxItems: 5,
              }}
            />
            <Field.Textarea required name="ecaPriObjDetails" label={i`eca.priobj.details`} rows={3} cols={40} check={{ maxLength: 200}} />
            <CompositeField label={i`eca.ecaSecObj`}>
              {i`eca.ecaSecObjLabel`}<br />
              <Field.SelectMultiple
                name="ecaSecObj"
                label={i`eca.ecaSecObj`}
                options={[
                  { value: 'Creativity and innovation', label: i`eca.secobj.01` },
                  { value: 'Communication skills', label: i`eca.secobj.02` },
                  { value: 'Presentation abilities', label: i`eca.secobj.03` },
                  { value: 'Problem solving skills', label: i`eca.secobj.04` },
                  { value: 'Critical Thinking', label: i`eca.secobj.05` },
                  { value: 'Learning attitude', label: i`eca.secobj.06` },
                  { value: 'Self-learning skills', label: i`eca.secobj.07` },
                  { value: 'Collaboration skills', label: i`eca.secobj.08` },
                  { value: 'Cross-disciplinary skills', label: i`eca.secobj.09` },
                  { value: 'Self-initiative', label: i`eca.secobj.10` },
                  {
                    value: 'Others',
                    label: i`eca.secobj.11`,
                    view: () => (
                      <Field.Text name="ecaSecObjOther" placeholder="Please specify" size="50" required check={{ maxLength: 50 }} style={{ maxWidth: '50%' }} />
                    ),
                  },
                ]}
              /><br />

              {i`eca.ecaSecObjCommunityLabel`}<br />
              <Field.SelectMultiple
                name="ecaSecObjCommunity"
                label={i`eca.ecaSecObjCommunity`}
                options={[
                  { value: 'Contribution to school community', label: i`eca.secobj.12` },
                  { value: 'Contribution to local community', label: i`eca.secobj.13` },
                  {
                    value: 'Others',
                    label: i`eca.secobj.11`,
                    view: () => (
                      <Field.Text name="ecaSecObjCommunityOther" placeholder="Please specify" size="50" required check={{ maxLength: 50 }} style={{ maxWidth: '50%' }} />
                    ),
                  },
                ]}
              />

            </CompositeField>
            <Validate
              fields={['ecaSecObj', 'ecaSecObjCommunity']} 
              test={formValidation.checkSecObj} messages={formValidation.checkSecObjMsg}
            />

            <Field.Integer
              name="ecaNoofStudent"
              label={i`eca.noofstudent`}
              required
              check={{
                min: 1,
                max: 9999,
              }}
            />

            <b>{i`eca.ecaDate`}</b>
            <CompositeField label={i`eca.ecaDateFrom`} layout="sibling" required>
              <Field.Select
                name="ecaDateFromMonth" label={i`month`}
                options={common.mmOptions(i)}
              />
              <span>/ </span>
              <Field.Dropdown
                name="ecaDateFromYear"
                label={i`year`}
                options={common.yyyyOptions(i)}
              />
            </CompositeField>
            <CompositeField label={i`eca.ecaDateTo`} layout="sibling" required>
              <Field.Select
                name="ecaDateToMonth" label={i`month`}
                options={common.mmOptions(i)}
              />
              <span>/ </span>
              <Field.Dropdown
                name="ecaDateToYear"
                label={i`year`}
                options={common.yyyyOptions(i)}
              />
            </CompositeField>
            <Validate
              fields={['ecaDateFromMonth', 'ecaDateFromYear', 'ecaDateToMonth', 'ecaDateToYear']} 
              test={formValidation.checkDate} messages={formValidation.checkDateMsg}
            />
            <Validate 
              fields={['ecaDateFromMonth', 'ecaDateFromYear', 'ecaDateToMonth', 'ecaDateToYear']} 
              test={formValidation.checkDatePeriod} messages={formValidation.checkDatePeriodMsg}
            />

            <Field.Number
              name="ecaNoofHours"
              label={i`eca.noofhours`}
              required
              check={{
                max: 9999,
              }}
            />
           
            <Field.Select
              name="ecaDlvyMode"
              required
              label={i`eca.dlvymode`}
              optionGroups={[
                {
                  label: 'Delivered by school only',
                  options: [
                    { value: 'S', label: i`eca.dlvy.s` },
                  ],
                },
                {
                  label: 'Jointly delivered by school and external parties',
                  options: [
                    {
                      value: 'SEA',
                      label: i`eca.dlvy.sea`,
                      view: () => (
                        <Field.Text name="ecaDlvyModeSEA" placeholder="Please specify" size="50" required check={{ maxLength: 50 }} style={{ maxWidth: '50%' }} />
                      ),
                    },
                    {
                      value: 'SEI',
                      label: i`eca.dlvy.sei`,
                      view: () => (
                        <Field.Text name="ecaDlvyModeSEI" placeholder="Please specify" size="50" required check={{ maxLength: 50 }} style={{ maxWidth: '50%' }} />
                      ),
                    },
                    {
                      value: 'SEP',
                      label: i`eca.dlvy.sep`,
                      view: () => (
                        <Field.Text name="ecaDlvyModeSEP" placeholder="Please specify" size="50" required check={{ maxLength: 50 }} style={{ maxWidth: '50%' }} />
                      ),
                    },
                    {
                      value: 'SEN',
                      label: i`eca.dlvy.sen`,
                      view: () => (
                        <Field.Text name="ecaDlvyModeSEN" placeholder="Please specify" size="50" required check={{ maxLength: 50 }} style={{ maxWidth: '50%' }} />
                      ),
                    },
                    {
                      value: 'SEO',
                      label: i`eca.dlvy.seo`,
                      view: () => (
                        <Field.Text name="ecaDlvyModeSEO" placeholder="Please specify type and name" size="50" required check={{ maxLength: 50 }} style={{ maxWidth: '50%' }} />
                      ),
                    },
                  ],
                },
                {
                  label: 'Mainly delivered by external parties only (e.g. outsourcing)',
                  options: [
                    {
                      value: 'OEA',
                      label: i`eca.dlvy.oea`,
                      view: () => (
                        <Field.Text name="ecaDlvyModeEA" placeholder="Please specify" size="50" required check={{ maxLength: 50 }} style={{ maxWidth: '50%' }} />
                      ),
                    },
                    {
                      value: 'OEI',
                      label: i`eca.dlvy.oei`,
                      view: () => (
                        <Field.Text name="ecaDlvyModeEI" placeholder="Please specify" size="50" required check={{ maxLength: 50 }} style={{ maxWidth: '50%' }} />
                      ),
                    },
                    {
                      value: 'OEP',
                      label: i`eca.dlvy.oep`,
                      view: () => (
                        <Field.Text name="ecaDlvyModeEP" placeholder="Please specify" size="50" required check={{ maxLength: 50 }} style={{ maxWidth: '50%' }} />
                      ),
                    },
                    {
                      value: 'OEN',
                      label: i`eca.dlvy.oen`,
                      view: () => (
                        <Field.Text name="ecaDlvyModeEN" placeholder="Please specify" size="50" required check={{ maxLength: 50 }} style={{ maxWidth: '50%' }} />
                      ),
                    },
                    {
                      value: 'OEO',
                      label: i`eca.dlvy.oeo`,
                      view: () => (
                        <Field.Text name="ecaDlvyModeEO" placeholder="Please specify type and name" size="50" required check={{ maxLength: 50 }} style={{ maxWidth: '50%' }} />
                      ),
                    },
                  ],
                },
              ]}
            />
            <Condition field="ecaDlvyMode" contains="OE">
              <Field.Textarea required name="ecaDlvyByExternalDetails" label={i`eca.dlvy.details`} rows={3} cols={40} check={{ maxLength: 200}} />
            </Condition>
            
            <b>{i`eca.activitytype`}</b><br/><br/>
            <Field.SelectMultiple
              label={i`eca.type.learnAct`}
              name="activityTypeLearningActivities"
              options={[
                { value: 'Organise workshop', label: i`eca.type.learn.01` },
                { value: 'Organise maker session', label: i`eca.type.learn.02` },
                { value: 'Organise seminar/lesson', label: i`eca.type.learn.03` },
                { value: 'Organise short course/training', label: i`eca.type.learn.04` },
                { value: 'Attend external workshop', label: i`eca.type.learn.05` },
                { value: 'Attend external maker session', label: i`eca.type.learn.06` },
                { value: 'Attend external seminar/lesson', label: i`eca.type.learn.07` },
                { value: 'Attend external short course/training', label: i`eca.type.learn.08` },
                {
                  value: 'Learning activities - Others',
                  label: i`eca.type.others`,
                  view: () => (
                    <Field.Text name="ecaActivityTypeLearnOthers" placeholder="Please specify" size="50" required check={{ maxLength: 50 }} style={{ maxWidth: '50%' }} />
                  ),
                },
              ]}
            />
            <Field.SelectMultiple
              label={i`eca.type.Competition`}
              name="activityTypeCompetition"
              options={[{ value: 'Organise intra-school competition', label: i`eca.type.comp.01` },
              { value: 'Organise local inter-school competition', label: i`eca.type.comp.02` },
              { value: 'Organise non-local inter-school competition (Mainland)', label: i`eca.type.comp.03` },
              { value: 'Organise non-local inter-school competition (international)', label: i`eca.type.comp.04` },
              { value: 'Attend local competition', label: i`eca.type.comp.05` },
              { value: 'Attend non-local competition (Mainland)', label: i`eca.type.comp.06` },
              { value: 'Attend non-local competition (international)', label: i`eca.type.comp.07` },
              {
                value: 'Competition - Others',
                label: i`eca.type.others`,
                view: () => (
                  <Field.Text name="ecaActivityTypeCompOthers" placeholder="Please specify" size="50" required check={{ maxLength: 50 }} style={{ maxWidth: '50%' }} />
                ),
              }]}
            />

            <Condition field="activityTypeCompetition" if={activityTypeCompetition => typeof activityTypeCompetition !== 'undefined'}>
              <Condition field="activityTypeCompetition" if={activityTypeCompetition => activityTypeCompetition.length !== 0}>
                <Field.SelectMultiple
                  required
                  name="activityTypeCompType"
                  label={i`eca.type.comp.comptype`}
                  options={[
                    { value: 'IT knowledge', label: i`eca.type.comp.type.01` },
                    { value: 'Coding', label: i`eca.type.comp.type.02` },
                    { value: 'Mobile App', label: i`eca.type.comp.type.03` },
                    { value: 'Robotics', label: i`eca.type.comp.type.04` },
                    { value: 'Game design', label: i`eca.type.comp.type.05` },
                    { value: 'Hackathon', label: i`eca.type.comp.type.07` },
                    { value: 'Datathon', label: i`eca.type.comp.type.08` },
                    { value: 'Pitching', label: i`eca.type.comp.type.09` },
                    { value: 'Innovative solutions/ prototype', label: i`eca.type.comp.type.10` },
                    {
                      value: 'Others',
                      label: i`eca.type.comp.type.11`,
                      view: () => (
                        <Field.Text name="ecaCompTypeOther" placeholder="Please specify" size="50" required check={{ maxLength: 50 }} style={{ maxWidth: '50%' }} />
                      ),
                    },
                  ]}
                  check={{
                    minItems: 1,
                  }}
                />
              </Condition>
            </Condition>

            <Field.SelectMultiple
              label={i`eca.type.Exhibition`}
              name="activityTypeExhibition"
              options={[
                { value: 'Organise intra-school exhibition / Expo / Conference / Symposium / Open day', label: i`eca.type.expo.01` },
                { value: 'Organise inter-school exhibition / Expo / Conference / Symposium / Open day', label: i`eca.type.expo.02` },
                { value: 'Attend exhibition / Expo / Conference / Symposium', label: i`eca.type.expo.03` },
                {
                  value: 'Expo - Others',
                  label: i`eca.type.others`,
                  view: () => (
                    <Field.Text name="ecaActivityTypeExpoOthers" placeholder="Please specify" size="50" required check={{ maxLength: 50 }} style={{ maxWidth: '50%' }} />
                  ),
                },
              ]}
            />
            <Field.SelectMultiple
              label={i`eca.type.Visit`}
              name="activityTypeVisit"
              options={[{
                value: 'Visit to local IT organisations for students',
                label: i`eca.type.visit.01`,
                view: () => (
                  <Field.Text name="ecaActivityTypeVisitOrg" placeholder="Organisation Name" size="50" required check={{ maxLength: 50 }} style={{ maxWidth: '50%' }} />
                ),
              },
              {
                value: 'Visit - Local field trip in support of the IT-related activities',
                label: i`eca.type.visit.02`,
              },
              {
                value: 'Visit - Others',
                label: i`eca.type.others`,
                view: () => (
                  <Field.Text name="ecaActivityTypeVisitOthers" placeholder="Please specify" size="50" required check={{ maxLength: 50 }} style={{ maxWidth: '50%' }} />
                ),
              }]}
            />
            <Field.SelectMultiple
              label={i`eca.type.Others`}
              name="activityTypeOthers"
              options={[{
                value: 'Others',
                label: i`eca.type.others`,
                view: () => (
                  <Field.Text name="ecaActivityTypeOthers" placeholder="Please specify" size="50" required check={{ maxLength: 50 }} style={{ maxWidth: '50%' }} />
                ),
              }]}
            />
            <Validate
              fields={['activityTypeLearningActivities', 'activityTypeCompetition', 'activityTypeCompType', 'activityTypeExhibition', 'activityTypeVisit', 'activityTypeOthers']}
              test={formValidation.checkActType} messages={formValidation.checkActTypeMsg}
            />

            <b>{i`eca.materialShared`}</b><br/><br/>
            <Field.SelectMultiple
              name="ecaMaterialTeach"
              label={i`eca.ecaMaterialTeach`}
              options={[
                { value: 'Materials for teaching - Presentation Slides', label: i`eca.material.01` },
                { value: 'Materials for teaching - Worksheets', label: i`eca.material.02` },
                { value: 'Materials for teaching - Sample Code', label: i`eca.material.03` },
                { value: 'Materials for teaching - Teaching Notes', label: i`eca.material.04` },
                {
                  value: 'Materials for teaching - Others',
                  label: i`eca.material.05`,
                  view: () => (
                    <Field.Text name="ecaMaterialTeachOther" placeholder="Please specify" size="50" required check={{ maxLength: 50 }} style={{ maxWidth: '50%' }} />
                  ),
                }, 
              ]}
              check={{
                minItems: 0,
              }}
            />
            
			      <Field.SelectMultiple
              name="ecaMaterialWork"
              label={i`eca.ecaMaterialWork`}
              options={[
                { value: 'Works of Students - Presentation Slides', label: i`eca.material.06` },
                { value: 'Works of Students - Images', label: i`eca.material.07` },
                { value: 'Works of Students - Video', label: i`eca.material.08` },
                {
                  value: 'Works of Students - Others',
                  label: i`eca.material.09`,
                  view: () => (
                    <Field.Text name="ecaMaterialWorkOther" placeholder="Please specify" size="50" required check={{ maxLength: 50 }} style={{ maxWidth: '50%' }} />
                  ),
                },  
              ]}
              check={{
                minItems: 0,
              }}
            />
            
			      <Field.SelectMultiple
              name="ecaMaterialRecord"
              label={i`eca.ecaMaterialRecord`}
              options={[
                { value: 'Records of Activities - Photos', label: i`eca.material.10` },
                { value: 'Records of Activities - Computer-generated Images', label: i`eca.material.11` },
                { value: 'Records of Activities - Video', label: i`eca.material.12` },
                { value: 'Records of Activities - Computer-generated Video', label: i`eca.material.13` },
                {
                  value: 'Records of Activities - Other materials',
                  label: i`eca.material.14`,
                  view: () => (
                    <Field.Text name="ecaMaterialRecOther" placeholder="Please specify" size="50" required check={{ maxLength: 50 }} style={{ maxWidth: '50%' }} />
                  ),
                },
              ]}
              check={{
                minItems: 0,
              }}
            />

            <Validate
              fields={['ecaMaterialTeach', 'ecaMaterialWork', 'ecaMaterialRecord']} 
              test={formValidation.checkShared} messages={formValidation.checkSharedMsg}
            />
            <Field.Textarea name="ecaDetails" label={i`eca.ecaDetails`} rows={3} cols={40} check={{ maxLength: 200 }} />
          </FieldList>
        </Section>
      </Section>
    </div>
  ),
};
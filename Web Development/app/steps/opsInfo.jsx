/* eslint react/prop-types: 0 */
import React from 'react';
import { Section, Field, FieldList, DependsOn, Validate } from 'govhk-form-core';
import formToValidation from './validation';
import formToCommon from './common';

const formValidation = formToValidation;
const common = formToCommon;

export default {
  title: ({ i }) => i`step.opsStep`,
  content: ({ i }) => (
    <div>
      <Section title={i`section.planSection`}>
        <Section title={i`section.costSection`}>
          <p>
            <h5>{i`section.opsSection`}</h5><br/>
            {i`ops.p1`}
            {i`ops.p2`}
            <u>{i`ops.p3`}</u>
            {i`ops.p4`}
          </p>
          <br />

          <FieldList name="listOfOps" maxItems={50}>
          <Field.Select
            name="opsType"
            label={i`ops.opsType`}
            options={[
                  { value: 'Professional Services for Supporting Organisation of Activities', label: i`ops.type.01` },
                  { value: 'Transportation Fees (Local)', label: i`ops.type.02` },
                  { value: 'Transportation Fees (Non-local)', label: i`ops.type.03` },
                  { value: 'Accommodation Fees (Non-local Competition)', label: i`ops.type.04` },
                  { value: 'Supply Teacher', label: i`ops.type.05` },
                  { value: 'Consumables', label: i`ops.type.06` },
                  { value: 'Accounting Services', label: i`ops.type.07` },
                  { value: 'Audit Services', label: i`ops.type.08` },
                  { value: 'Promotion', label: i`ops.type.09` },
                  { value: 'Others', label: i`ops.type.10` },
                ]}
            style={{ 'margin-right': '20px' }}
          />

            <Field.Textarea name="opsDesc" label={i`ops.opsDesc`} rows={5} cols={40} check={{ maxLength: 350 }} />

            <Field.Number name="opsBudget" label={i`ops.opsBudget`} defaultValue="0.00" check={{ max: 1000000, dp: 2 }} />

            <Validate
              fields={['opsType', 'opsBudget', 'opsDesc']}
              test={formValidation.checkItem} messages={formValidation.checkItemMsg}
            />

            <Field.Textarea name="opsRemarks" label={i`ops.opsRemarks`} rows={2} cols={40} check={{ maxLength: 120 }} />
     
            <Field.Textarea name="opsOtherFund" label={i`ops.opsOtherFund`} rows={2} cols={40} check={{ maxLength: 100 }} />
          </FieldList>

          <DependsOn fields="listOfOps">
            {listOfOps => (
              <div>
                <br />
                <h3>{i`cost.itemBudgetTot`}: { common.formatNumber(common.opsBudget(listOfOps)) }</h3>
                <br />
              </div>
            )}
          </DependsOn>
        </Section>
      </Section>
    </div>
  ),
};
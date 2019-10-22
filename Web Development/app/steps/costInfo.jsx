/* eslint react/prop-types: 0 */
import React from 'react';
import { Section, Field, FieldList, Layout, DependsOn, Validate } from 'govhk-form-core';
import formToValidation from './validation';
import formToCommon from './common';

const formValidation = formToValidation;
const common = formToCommon;

export default {
  title: ({ i }) => i`step.costStep`,
  content: ({ i }) => (
    <div>
      <Section title={i`section.planSection`}>
        <Section title={i`section.costSection`}>
          <p>
            <h5>{i`section.infraSection`}</h5><br/>
            {i`cost.p1`}
            {i`cost.p2`}
            <u>{i`cost.p3`}</u>
            {i`cost.p4`}
          </p><br />

          <DependsOn fields="listOfECA">
            {listOfECAS => (
            <FieldList name="listOfItem" maxItems={50}>
              <Field.Select
                name="itemType"
                label={i`cost.itemType`}
                options={[
                      { value: 'Hardware (Server-side computing)', label: i`cost.type.01` },
                      { value: 'Hardware (Client-side computing)', label: i`cost.type.02` },
                      { value: 'Hardware (Peripherals)', label: i`cost.type.03` },
                      { value: 'Hardware (Others)', label: i`cost.type.04` },
                      { value: 'Software (Server-side computing)', label: i`cost.type.05` },
                      { value: 'Software (Client-side computing)', label: i`cost.type.06` },
                      { value: 'Infrastructure', label: i`cost.type.07` },
                      { value: 'Cloud Services', label: i`cost.type.08` },
                      { value: 'Others', label: i`cost.type.09` },
                ]}
                style={{ 'margin-right': '20px' }}
              />

              <Field.Textarea name="itemDesc" label={i`cost.itemDesc`} rows={5} cols={40} check={{ maxLength: 350 }} />

              <Layout.Inline>
                <Field.Number name="itemBudget" label={i`cost.itemBudget`} defaultValue="0.00" check={{ max: 1000000, dp: 2 }} />
                <Field.Number name="itemServFee" label={i`cost.itemServFee`} defaultValue="0.00" check={{ max: 1000000, dp: 2 }} />
              </Layout.Inline>

              <Validate
                fields={['itemType', 'itemBudget', 'itemDesc']}
                test={formValidation.checkItem} messages={formValidation.checkItemMsg}
              />

              <Field.Textarea name="itemRemarks" label={i`cost.itemRemarks`} rows={2} cols={40} check={{ maxLength: 120 }} />

              <Field.Textarea name="itemOtherFund" label={i`cost.itemOtherFund`} rows={2} cols={40} check={{ maxLength: 100 }} />
            </FieldList>
          )}
          </DependsOn>
          <DependsOn fields="listOfItem">
            {listOfItem => (
              <div>
                <br />
                <h3>{i`cost.itemBudgetTot`}: { common.formatNumber(common.itemBudget(listOfItem)) }</h3>
                <br />
                <h3>{i`cost.itemServFeeTot`}: { common.formatNumber(common.itemServFee(listOfItem)) }</h3>
              </div>
            )}
          </DependsOn>

        </Section>
      </Section>
    </div>
  ),
};
/* eslint react/prop-types: 0 */
import React from 'react';
import { Section, Field, DependsOn, Message, Validate } from 'govhk-form-core';
import formToValidation from './validation';
import formToCommon from './common';

const formValidation = formToValidation;
const common = formToCommon;

export default {
  title: ({ i }) => i`step.budgetStep`,
  content: ({ i }) => (
    <div>
      <Section title={i`section.planSection`}>
        <Section title={i`section.budgetSection`}>
          <p>
            {i`budget.p1`}
          </p>
          <br/>
          <h5>
            {i`section.budget`}
          </h5>

          <table className="table">
            <thead>
              <tr>
                <th scope="col" width="60%" />
                <th scope="col" width="40%">{i`budget.item1`}</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">{i`budget.item2`}</th>
                <td>
                  <DependsOn fields="listOfItem">
                    {listofItem => (
                      common.formatNumber(common.itemTot(listofItem))
                    )}
                  </DependsOn>
                </td>
              </tr>
              <tr>
                <th scope="row">{i`budget.item4`}</th>
                <td>
                  <DependsOn fields="listOfOps">
                    {listOfOps => (
                      common.formatNumber(common.opsTot(listOfOps))
                    )}
                  </DependsOn>
                </td>
              </tr>
              <tr>
                <th scope="row">{i`budget.item5`}</th>
                <td>
                  <DependsOn fields={['listOfItem', 'listOfOps']}>
                    {(listofItem, listOfOps) => (
                      common.formatNumber(common.itemTot(listofItem) + common.opsTot(listOfOps))
                    )}
                  </DependsOn>
                </td>
              </tr>
            </tbody>
          </table>

          <br/><br/>
          <p>
            {i`budget.p2`}
          </p>
          <br/>
          <h5>
            {i`section.cashflow`}
          </h5>
          <table className="table">
            <thead>
              <tr>
                <th scope="col" width="20%" />
                <th scope="col" width="20%">{i`budget.item6`}</th>
                <th scope="col" width="20%">{i`budget.item7`}</th>
                <th scope="col" width="20%">{i`budget.item8`}</th>
                <th scope="col" width="20%">{i`budget.item5`}</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">{i`budget.item9`}</th>
                <td>
                  <DependsOn fields={['listOfItem', 'listOfOps']}>
                    {(listOfItem, listOfOps) => (
                      common.formatNumber(common.itemTot(listOfItem) + common.opsTot(listOfOps))
                    )}
                  </DependsOn>
                </td>
                <td><Field.Number name="cf2020_21" defaultValue="0.00" check={{ max: 1000000, dp: 2 }} /></td>
                <td><Field.Number name="cf2021_22" defaultValue="0.00" check={{ max: 1000000, dp: 2 }} /></td>
                <td>
                  <DependsOn fields={['listOfItem', 'listOfOps', 'cf2020_21', 'cf2021_22']}>
                    {(listOfItem, listOfOps, cf2020_21, cf2021_22) => (
                      common.formatNumber(common.budgetTot(common.itemTot(listOfItem) + common.opsTot(listOfOps), cf2020_21, cf2021_22))
                    )}
                  </DependsOn>
                </td>
              </tr>
            </tbody>
          </table>

          <Validate
            fields={['listOfItem', 'listOfOps', 'cf2020_21', 'cf2021_22']}
            test={(listOfItem, listOfOps, cf2020_21, cf2021_22) => (formValidation.outofBudget(common.itemTot(listOfItem) + common.opsTot(listOfOps), cf2020_21, cf2021_22))} messages={formValidation.outofBudgetMsg}
          />

        </Section>
      </Section>
    </div>
  ),
};

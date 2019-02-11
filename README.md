# Simcentric - Asset Transfer System _Front End_

Nothing to see here, Go back to work

## Work checklist

- [X] Login
- [X] User Level Authorization
    - [X] Asset links
    - [X] Employee links
    - [X] Department links
    - [X] Record links
- [ ] Asset Transfer
- [ ] Asset Breakdown
- [ ] Asset Request

## Container Structure

- Asset Section
  - View asset pool             (all)
  - View owned assets           (employee)
  - Request asset               (employee)
  - Report breakdown            (employee)
  - Handle breakdown            (admin)
  - Transfer assets             (admin)
  - Manage assets               (finance)
  - Manage asset categories     (admin)
- Employee Section
  - View employee details       (admin, dept head)
  - View employee assets        (admin, dept head)
  - Manage employees            (admin)
  - Handle asset requests       (admin, dept head)
  - Resignation                 (admin, dept head, employee)
- Department Section
  - View department details     (admin)
  - Manage departments          (admin)
- Records Secton
  - Asset history               (all)
  - Export records              (all)

### Thank you.

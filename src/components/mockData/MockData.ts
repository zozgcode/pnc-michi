import { Account } from '@/utils/types';

export const mockAccounts: Account[] = [
  {
    account_id: 'ACC001',
    holder: {
      fullName: 'Andrew',
      lastName: 'McNulty',
      mobileNumber: '+1-224-463-7589',
      nickName: 'jford',
      email: 'a*@gmail.com',
      jointNames: '',
      username: 'sample1',
      password: 'sample1'
    },
    bank_details: {
      account_type: 'Checking',
      balance_usd: 115678.0
    },
    transaction_mgs_code: {
      transaction_text_msg: 'To continue this transaction, Please enter the code sent to you',
      transaction_code: '',
      wireDate: true
    },
    transaction_history: [
      {
        transaction_id: 'TXN001',
        dateTime: 'June 10 2024, 3:32:32 am',
        description: "Grimms supply holding's",
        status: 'Success',
        amount_usd: 58000.0,
        account_no: '****5009'
      },
      {
        transaction_id: 'TXN002',
        dateTime: 'April 15 2023, 1:04:02 pm',
        description: 'Transfer from TABITHA MARTEL',
        status: 'Success',
        amount_usd: 250000.0,
        account_no: '****2930'
      },
      {
        transaction_id: 'TXN003',
        dateTime: 'February 8 2022, 10:11:22 am',
        description: 'Transfer from NICHOLAS DUKE',
        status: 'Success',
        amount_usd: 650000.0,
        account_no: '****3839'
      },
      {
        transaction_id: 'TXN004',
        dateTime: 'July 2 2021, 7:08:32 am',
        description: 'Transfer from BRANDON PERKINS',
        status: 'Success',
        amount_usd: 175000.0,
        account_no: '****3249'
      },
      {
        transaction_id: 'TXN005',
        dateTime: 'November 23 2020, 1:15:02 pm',
        description: "Sinlair's Store - Trx",
        status: 'Success',
        amount_usd: -650.0,
        account_no: '****1403'
      },
      {
        transaction_id: 'TXN006',
        dateTime: 'April 23 2020, 8:15:02 pm',
        description: 'Project Milestone Payment',
        status: 'Success',
        amount_usd: 65000.0,
        account_no: '****1403'
      },
      {
        transaction_id: 'TXN007',
        dateTime: 'March 15, 2019, 7:20:15 am',
        description: 'Project Completion Bonus',
        status: 'Success',
        amount_usd: 18000.0,
        account_no: '****5012'
      },
      {
        transaction_id: 'TXN008',
        dateTime: 'February 12, 2019, 10:45:00 am',
        description: 'Walmart',
        status: 'Success',
        amount_usd: -4000.0,
        account_no: '****5013'
      },
      {
        transaction_id: 'TXN009',
        dateTime: 'April 16, 2019, 2:45:15 pm',
        description: 'AT&T',
        status: 'Success',
        amount_usd: -400.0,
        account_no: '****5007'
      },
      {
        transaction_id: 'TXN010',
        dateTime: 'April 23 2020, 8:15:02 pm',
        description: 'Project Milestone Payment',
        status: 'Success',
        amount_usd: 65000.0,
        account_no: '****1403'
      },
      {
        transaction_id: 'TXN011',
        dateTime: 'March 15, 2019, 7:20:15 am',
        description: 'Project Completion Bonus',
        status: 'Success',
        amount_usd: 18000.0,
        account_no: '****5012'
      },
      {
        transaction_id: 'TXN012',
        dateTime: 'February 12, 2019, 10:45:00 am',
        description: 'Walmart',
        status: 'Success',
        amount_usd: -4000.0,
        account_no: '****5013'
      },
      {
        transaction_id: 'TXN013',
        dateTime: 'April 16, 2019, 2:45:15 pm',
        description: 'AT&T',
        status: 'Success',
        amount_usd: -400.0,
        account_no: '****5007'
      },
      {
        transaction_id: 'TXN014',
        dateTime: 'April 23 2020, 8:15:02 pm',
        description: 'Project Milestone Payment',
        status: 'Success',
        amount_usd: 65000.0,
        account_no: '****1403'
      },
      {
        transaction_id: 'TXN015',
        dateTime: 'March 15, 2019, 7:20:15 am',
        description: 'Project Completion Bonus',
        status: 'Success',
        amount_usd: 18000.0,
        account_no: '****5012'
      },
      {
        transaction_id: 'TXN016',
        dateTime: 'February 12, 2019, 10:45:00 am',
        description: 'Walmart',
        status: 'Success',
        amount_usd: -4000.0,
        account_no: '****5013'
      },
      {
        transaction_id: 'TXN017',
        dateTime: 'April 16, 2019, 2:45:15 pm',
        description: 'AT&T',
        status: 'Success',
        amount_usd: -400.0,
        account_no: '****5007'
      }
    ]
  },
  {
    account_id: 'ACC002',
    holder: {
      fullName: 'Stacey',
      lastName: 'Roland',
      mobileNumber: '',
      email: 's*@gmail.com',
      dateCreated: '9/14/2024',
      username: 'StaceyRoland43',
      password: '!StaceyRoland@212'
    },
    bank_details: {
      account_type: 'Checking',
      balance_usd: 250000.0
    },
    transaction_mgs_code: {
      transaction_text_msg: 'To continue this transaction, Please enter the code sent to you',
      transaction_code: '237832w2762',
      wireDate: true
    },
    transaction_history: [
      {
        transaction_id: 'TXN001',
        dateTime: 'June 10 2024',
        description: "Grimms supply holding's",
        status: 'Success',
        amount_usd: 58000.0,
        account_no: '****5009'
      },
      {
        transaction_id: 'TXN002',
        dateTime: 'April 15 2023',
        description: 'Transfer from TABITHA MARTEL',
        status: 'Success',
        amount_usd: 250000.0,
        account_no: '****2930'
      },
      {
        transaction_id: 'TXN003',
        dateTime: 'February 8 2022',
        description: 'Transfer from NICHOLAS DUKE',
        status: 'Success',
        amount_usd: 650000.0,
        account_no: '****3839'
      },
      {
        transaction_id: 'TXN004',
        dateTime: 'July 2 2021',
        description: 'Transfer from BRANDON PERKINS',
        status: 'Success',
        amount_usd: 175000.0,
        account_no: '****3249'
      },
      {
        transaction_id: 'TXN005',
        dateTime: 'November 23 2020',
        description: "Sinlair's Store - Trx",
        status: 'Success',
        amount_usd: -650.0,
        account_no: '****1403'
      },
      {
        transaction_id: 'TXN006',
        dateTime: 'April 23 2020',
        description: 'Project Milestone Payment',
        status: 'Success',
        amount_usd: 65000.0,
        account_no: '****1403'
      },
      {
        transaction_id: 'TXN007',
        dateTime: 'March 15, 2019',
        description: 'Project Completion Bonus',
        status: 'Success',
        amount_usd: 18000.0,
        account_no: '****5012'
      },
      {
        transaction_id: 'TXN008',
        dateTime: 'February 12, 2019',
        description: 'Walmart',
        status: 'Success',
        amount_usd: -4000.0,
        account_no: '****5013'
      },
      {
        transaction_id: 'TXN009',
        dateTime: 'April 16, 2019',
        description: 'AT&T',
        status: 'Success',
        amount_usd: -400.0,
        account_no: '****5007'
      },
      {
        transaction_id: 'TXN010',
        dateTime: 'April 23 2020',
        description: 'Project Milestone Payment',
        status: 'Success',
        amount_usd: 65000.0,
        account_no: '****1403'
      },
      {
        transaction_id: 'TXN011',
        dateTime: 'March 15, 2019',
        description: 'Project Completion Bonus',
        status: 'Success',
        amount_usd: 18000.0,
        account_no: '****5012'
      },
      {
        transaction_id: 'TXN012',
        dateTime: 'February 12, 2019',
        description: 'Walmart',
        status: 'Success',
        amount_usd: -4000.0,
        account_no: '****5013'
      },
      {
        transaction_id: 'TXN013',
        dateTime: 'April 16, 2019',
        description: 'AT&T',
        status: 'Success',
        amount_usd: -400.0,
        account_no: '****5007'
      },
      {
        transaction_id: 'TXN014',
        dateTime: 'April 23 2020',
        description: 'Project Milestone Payment',
        status: 'Success',
        amount_usd: 65000.0,
        account_no: '****1403'
      },
      {
        transaction_id: 'TXN015',
        dateTime: 'March 15, 2019',
        description: 'Project Completion Bonus',
        status: 'Success',
        amount_usd: 18000.0,
        account_no: '****5012'
      },
      {
        transaction_id: 'TXN016',
        dateTime: 'February 12, 2019',
        description: 'Walmart',
        status: 'Success',
        amount_usd: -4000.0,
        account_no: '****5013'
      },
      {
        transaction_id: 'TXN017',
        dateTime: 'April 16, 2019',
        description: 'AT&T',
        status: 'Success',
        amount_usd: -400.0,
        account_no: '****5007'
      }
    ]
  },
  {
    account_id: 'ACC003',
    holder: {
      fullName: 'Kaley Cuoco',
      profileImgUrl: '',
      email: 'kaleycuo**@outlook.com',
      dateCreated: '7/28/2025', // m/d/y
      username: 'kaleycuoco101',
      password: 'Matilda2023'
    },
    bank_details: {
      account_type: 'Checking',
      isAccountNumber: true,
      balance_usd: 8600000.0
    },
    transaction_mgs_code: {
      transaction_text_msg: 'To continue this transaction, please enter the code sent to you',
      transaction_code: '237832',
      headerText: 'Dear Valued Customer,',
      lastStepText: 'Your account is on hold. You cannot make transactions right now. Please contact our customer service team on trustwcustomerservice@outlook.com for assistance.',
      wireDate: true
    },
    transaction_history: [
      {
        dateTime: 'February 3, 2024',
        description: 'Investment shares from raw - XXXXXX7631',
        status: 'Success',
        amount_usd: 500000.0
      },
      {
        dateTime: 'January 5, 2024',
        description: 'Investment shares from uncut gemstones diamonds - XXXXXX3673',
        status: 'Success',
        amount_usd: 50000.0
      },
      {
        dateTime: 'December 6, 2023',
        description: 'Investment shares from uncut gemstones diamonds - XXXXXX2854',
        status: 'Success',
        amount_usd: 300000.0
      },
      {
        dateTime: 'November 7, 2023',
        description: 'Investment shares from raw - XXXXXX4987',
        status: 'Success',
        amount_usd: 500000.0
      },
      {
        dateTime: 'October 9, 2023',
        description: 'Investment shares from uncut gemstones diamonds - XXXXXX9340',
        status: 'Success',
        amount_usd: 500000.0
      },
      {
        dateTime: 'September 11, 2023',
        description: 'Investment shares from raw - XXXXXX1126',
        status: 'Success',
        amount_usd: 980000.0
      },
      {
        dateTime: 'August 13, 2023',
        description: 'Investment shares from uncut gemstones diamonds - XXXXXX6438',
        status: 'Success',
        amount_usd: 420000.0
      },
      {
        dateTime: 'July 15, 2023',
        description: 'Investment shares from raw - XXXXXX3850',
        status: 'Success',
        amount_usd: 2000000.0
      },
      {
        dateTime: 'June 17, 2023',
        description: 'Investment shares from uncut gemstones diamonds - XXXXXX9517',
        status: 'Success',
        amount_usd: 800000.0
      },
      {
        dateTime: 'May 19, 2023',
        description: 'Investment shares from raw - XXXXXX2093',
        status: 'Success',
        amount_usd: 670000.0
      },
      {
        dateTime: 'April 21, 2023',
        description: 'Investment shares from uncut gemstones diamonds - XXXXXX7182',
        status: 'Success',
        amount_usd: 330000.0
      },
      {
        dateTime: 'March 23, 2023',
        description: 'Investment shares from raw - XXXXXX8888',
        status: 'Success',
        amount_usd: 455000.0
      },
      {
        dateTime: 'February 23, 2023',
        description: 'account opening - XXXXXX26347',
        status: 'Success',
        amount_usd: 2000.0
      }
    ]
  },
  {
    account_id: 'ACC004',
    holder: {
      fullName: 'Kelly Jessica R. & James Hawley',
      profileImgUrl: '',
      email: 'kj**@gmail.com',
      dateCreated: '8/12/2025', // m/d/y
      username: 'Kellyjames2025',
      password: 'Blessed95'
    },
    bank_details: {
      account_type: 'Checking',
      isAccountNumber: true,
      balance_usd: 26303261.0
    },
    transaction_mgs_code: {
      transaction_text_msg: 'To continue this transaction, please enter the code sent to you',
      transaction_code: '23783',
      headerText: 'Dear Valued Customer,',
      lastStepText: 'Your account is on hold. You cannot make transactions right now. Please contact our customer service for assistance.',
      wireDate: true
    },
    transaction_history: [
      {
        dateTime: 'July 11, 2025',
        description: 'Transfer from FDI INVESTMENT FIRM - XXXXXX7631',
        status: 'Success',
        amount_usd: 26303261.0
      },
    ]
  }
];

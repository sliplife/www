import without from 'lodash/without';
import React, { PropTypes } from 'react';
import { Accordion, Divider, Dropdown, Header, Icon, Input, List } from 'semantic-ui-react';

export default class ListingsFilter extends React.Component {
  static propTypes = {
    filter: PropTypes.object.isRequired,
    handleSearchFilter: PropTypes.func.isRequired
  };
  constructor(props) {

    super(props);
    this.state = {
      expandedPanels: []
    };
  }
  handleSectionToggle(index) {

    const expandedPanels = this.state.expandedPanels;
    if (expandedPanels.includes(index)) {
      return this.setState({ expandedPanels: without(expandedPanels, index) });
    }
    expandedPanels.push(index);
    this.setState({ expandedPanels });
  }
  render() {

    const stateOptions = [
      { key: 'AL', value: 'Alabama', text: 'Alabama' },
      { key: 'AK', value: 'Alaska', text: 'Alaska' },
      { key: 'AS', value: 'American Samoa', text: 'American Samoa' },
      { key: 'AZ', value: 'Arizona', text: 'Arizona' },
      { key: 'AR', value: 'Arkansas', text: 'Arkansas' },
      { key: 'CA', value: 'California', text: 'California' },
      { key: 'CO', value: 'Colorado', text: 'Colorado' },
      { key: 'CT', value: 'Connecticut', text: 'Connecticut' },
      { key: 'DE', value: 'Delaware', text: 'Delaware' },
      { key: 'DC', value: 'District Of Columbia', text: 'District Of Columbia' },
      { key: 'FM', value: 'Federated States Of Micronesia', text: 'Federated States Of Micronesia' },
      { key: 'FL', value: 'Florida', text: 'Florida' },
      { key: 'GA', value: 'Georgia', text: 'Georgia' },
      { key: 'GU', value: 'Guam', text: 'Guam' },
      { key: 'HI', value: 'Hawaii', text: 'Hawaii' },
      { key: 'ID', value: 'Idaho', text: 'Idaho' },
      { key: 'IL', value: 'Illinois', text: 'Illinois' },
      { key: 'IN', value: 'Indiana', text: 'Indiana' },
      { key: 'IA', value: 'Iowa', text: 'Iowa' },
      { key: 'KS', value: 'Kansas', text: 'Kansas' },
      { key: 'KY', value: 'Kentucky', text: 'Kentucky' },
      { key: 'LA', value: 'Louisiana', text: 'Louisiana' },
      { key: 'ME', value: 'Maine', text: 'Maine' },
      { key: 'MH', value: 'Marshall Islands', text: 'Marshall Islands' },
      { key: 'MD', value: 'Maryland', text: 'Maryland' },
      { key: 'MA', value: 'Massachusetts', text: 'Massachusetts' },
      { key: 'MI', value: 'Michigan', text: 'Michigan' },
      { key: 'MN', value: 'Minnesota', text: 'Minnesota' },
      { key: 'MS', value: 'Mississippi', text: 'Mississippi' },
      { key: 'MO', value: 'Missouri', text: 'Missouri' },
      { key: 'MT', value: 'Montana', text: 'Montana' },
      { key: 'NE', value: 'Nebraska', text: 'Nebraska' },
      { key: 'NV', value: 'Nevada', text: 'Nevada' },
      { key: 'NH', value: 'New Hampshire', text: 'New Hampshire' },
      { key: 'NJ', value: 'New Jersey', text: 'New Jersey' },
      { key: 'NM', value: 'New Mexico', text: 'New Mexico' },
      { key: 'NY', value: 'New York', text: 'New York' },
      { key: 'NC', value: 'North Carolina', text: 'North Carolina' },
      { key: 'ND', value: 'North Dakota', text: 'North Dakota' },
      { key: 'MP', value: 'Northern Mariana Islands', text: 'Northern Mariana Islands' },
      { key: 'OH', value: 'Ohio', text: 'Ohio' },
      { key: 'OK', value: 'Oklahoma', text: 'Oklahoma' },
      { key: 'OR', value: 'Oregon', text: 'Oregon' },
      { key: 'PW', value: 'Palau', text: 'Palau' },
      { key: 'PA', value: 'Pennsylvania', text: 'Pennsylvania' },
      { key: 'PR', value: 'Puerto Rico', text: 'Puerto Rico' },
      { key: 'RI', value: 'Rhode Island', text: 'Rhode Island' },
      { key: 'SC', value: 'South Carolina', text: 'South Carolina' },
      { key: 'SD', value: 'South Dakota', text: 'South Dakota' },
      { key: 'TN', value: 'Tennessee', text: 'Tennessee' },
      { key: 'TX', value: 'Texas', text: 'Texas' },
      { key: 'UT', value: 'Utah', text: 'Utah' },
      { key: 'VT', value: 'Vermont', text: 'Vermont' },
      { key: 'VI', value: 'Virgin Islands', text: 'Virgin Islands' },
      { key: 'VA', value: 'Virginia', text: 'Virginia' },
      { key: 'WA', value: 'Washington', text: 'Washington' },
      { key: 'WV', value: 'West Virginia', text: 'West Virginia' },
      { key: 'WI', value: 'Wisconsin', text: 'Wisconsin' },
      { key: 'WY', value: 'Wyomin', text: 'Wyomin' }
    ];

    return (
      <Accordion exclusive={false}>
        <Accordion.Title onClick={(event, index) => this.handleSectionToggle(index)}>
          <Header style={{ cursor: 'pointer' }}>
            <Icon name={this.state.expandedPanels.includes(0) ? 'minus' : 'add'} style={{ float: 'right', fontSize: '1em' }} />
            Location
          </Header>
        </Accordion.Title>
        <Accordion.Content>
          <Header sub as='h5'>State</Header>
          <Dropdown fluid search selection
            className='mini'
            options={stateOptions}
            onChange={(event, data) => this.props.handleSearchFilter({ state: data.value })}
            value={this.props.filter.state}
          />
          <Header sub as='h5'>City</Header>
          <Input fluid size='mini' icon='marker' onChange={(event) => this.props.handleSearchFilter({ city: event.target.value })} value={this.props.filter.city} />
        </Accordion.Content>
        <Divider/>
        <Accordion.Title onClick={(event, index) => this.handleSectionToggle(index)}>
          <Header style={{ cursor: 'pointer' }}>
            <Icon name={this.state.expandedPanels.includes(1) ? 'minus' : 'add'} style={{ float: 'right', fontSize: '1em' }} />
            Dockage
          </Header>
        </Accordion.Title>
        <Accordion.Content>
          <Header sub as='h5'>Property</Header>
          <List selection>
            <List.Item onClick={() => this.props.handleSearchFilter({ location: 'condo' })} active={this.props.filter.location === 'condo'}>
              <List.Content>Condo</List.Content>
            </List.Item>
            <List.Item onClick={() => this.props.handleSearchFilter({ location: 'home' })} active={this.props.filter.location === 'home'}>
              <List.Content>Home</List.Content>
            </List.Item>
            <List.Item onClick={() => this.props.handleSearchFilter({ location: 'marina' })} active={this.props.filter.location === 'marina'}>
              <List.Content>Marina</List.Content>
            </List.Item>
            <List.Item onClick={() => this.props.handleSearchFilter({ location: 'vacant_lot' })} active={this.props.filter.location === 'vacant_lot'}>
              <List.Content>Vacant Lot</List.Content>
            </List.Item>
          </List>
          <Header sub as='h5'>Type</Header>
          <List selection>
            <List.Item onClick={() => this.props.handleSearchFilter({ type: 'dock' })} active={this.props.filter.type === 'dock'}>
              <List.Content>Dock</List.Content>
            </List.Item>
            <List.Item onClick={() => this.props.handleSearchFilter({ type: 'dry_storage' })} active={this.props.filter.type === 'dry_storage'}>
              <List.Content>Dry Storage</List.Content>
            </List.Item>
            <List.Item onClick={() => this.props.handleSearchFilter({ type: 'mooring' })} active={this.props.filter.type === 'moring'}>
              <List.Content>Mooring Buoy</List.Content>
            </List.Item>
            <List.Item onClick={() => this.props.handleSearchFilter({ type: 'slip' })} active={this.props.filter.type === 'slip'}>
              <List.Content>Slip</List.Content>
            </List.Item>
          </List>
        </Accordion.Content>
        <Divider/>
        <Accordion.Title onClick={(event, index) => this.handleSectionToggle(index)}>
          <Header style={{ cursor: 'pointer' }}>
            <Icon name={this.state.expandedPanels.includes(2) ? 'minus' : 'add'} style={{ float: 'right', fontSize: '1em' }} />
            Price
          </Header>
        </Accordion.Title>
        <Accordion.Content>
          <List selection>
            <List.Item onClick={() => this.props.handleSearchFilter({ terms: 'rent' })} active={this.props.filter.terms === 'rent'}>
              <List.Content>For Rent</List.Content>
            </List.Item>
            <List.Item onClick={() => this.props.handleSearchFilter({ terms: 'sale' })} active={this.props.filter.terms === 'sale'}>
              <List.Content>For Sale</List.Content>
            </List.Item>
          </List>
        </Accordion.Content>
      </Accordion>
    );
  }
}

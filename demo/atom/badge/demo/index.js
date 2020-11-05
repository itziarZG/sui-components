/* eslint-disable no-console */
import React from 'react'
import {
  Label,
  H1,
  H2,
  H4,
  Code,
  Bold,
  Paragraph,
  Article,
  UnorderedList,
  ListItem,
  DevIcon
} from '@s-ui/documentation-library'

import AtomBadge, {
  atomBadgeTypes,
  atomBadgeSizes
} from '../../../../components/atom/badge/src'

const BASE_CLASS_DEMO = `DemoAtomBadge`
const CLASS_SECTION = `${BASE_CLASS_DEMO}-section`

const icon = <DevIcon icon="DiGithubBadge" />

const Demo = () => {
  return (
    <div className="sui-StudioPreview" mode="light">
      <div className="sui-StudioPreview-content sui-StudioDemo-preview">
        <H1>Badge</H1>
        <Paragraph>
          This is an informative UI element, it doesn't change on hover or
          click, so the user can't interact with it.
        </Paragraph>
        <Article className={CLASS_SECTION}>
          <H2>Type</H2>
          <div>
            <Paragraph>
              These are the available <Code>types</Code> of bagdes, which are
              solid by default.
            </Paragraph>
            <AtomBadge label="success" type={atomBadgeTypes.SUCCESS} />
            <AtomBadge label="error" type={atomBadgeTypes.ERROR} />
            <AtomBadge label="info" type={atomBadgeTypes.INFO} />
            <AtomBadge label="alert" type={atomBadgeTypes.ALERT} />
            <AtomBadge label="new" type={atomBadgeTypes.NEW} />
            <AtomBadge label="primary" type={atomBadgeTypes.PRIMARY} />
          </div>
          <Paragraph>___</Paragraph>
          <div>
            <Paragraph>
              Use the Prop <Code>transparent</Code> to remove the background.
            </Paragraph>
            <AtomBadge
              label="success"
              type={atomBadgeTypes.SUCCESS}
              transparent
            />
            <AtomBadge label="error" type={atomBadgeTypes.ERROR} transparent />
            <AtomBadge label="info" type={atomBadgeTypes.INFO} transparent />
            <AtomBadge label="alert" type={atomBadgeTypes.ALERT} transparent />
            <AtomBadge label="new" type={atomBadgeTypes.NEW} transparent />
            <AtomBadge
              label="primary"
              type={atomBadgeTypes.PRIMARY}
              transparent
            />
          </div>
        </Article>
        <br />
        <Article className={CLASS_SECTION}>
          <H2>Sizes</H2>
          <div>
            <Paragraph>
              There are three options for <Code>size</Code>
            </Paragraph>
            <table>
              <tr>
                <td>
                  <Label>Small</Label>
                </td>
                <td>
                  <AtomBadge label="label" size={atomBadgeSizes.SMALL} />{' '}
                </td>
              </tr>
              <tr>
                <td>
                  <Label>Medium</Label>
                </td>
                <td>
                  <AtomBadge label="label" size={atomBadgeSizes.MEDIUM} />
                </td>
              </tr>
              <tr>
                <td>
                  <Label>Large</Label>
                </td>
                <td>
                  <AtomBadge label="label" size={atomBadgeSizes.LARGE} />{' '}
                </td>
              </tr>
            </table>
          </div>
        </Article>
        <br />
        <Article className={CLASS_SECTION}>
          <H2>Content</H2>
          <H4>Text</H4>
          <UnorderedList>
            <ListItem>Numbers, text and icons are valid</ListItem>
            <ListItem>The content will never split in two lines</ListItem>
            <ListItem>There's no limit of characters</ListItem>
          </UnorderedList>
          <table>
            <tr>
              <td>
                <Label>Small</Label>
              </td>
              <td>
                <AtomBadge label="label" size={atomBadgeSizes.SMALL} />
              </td>
              <td>
                <AtomBadge
                  label="label"
                  transparent
                  size={atomBadgeSizes.SMALL}
                />
              </td>
            </tr>
            <tr>
              <td>
                <Label>Medium</Label>
              </td>
              <td>
                <AtomBadge label="label" size={atomBadgeSizes.MEDIUM} />
              </td>
              <td>
                <AtomBadge
                  label="label"
                  transparent
                  size={atomBadgeSizes.MEDIUM}
                />
              </td>
            </tr>
            <tr>
              <td>
                <Label>Large</Label>
              </td>
              <td>
                <AtomBadge label="label" size={atomBadgeSizes.LARGE} />
              </td>
              <td>
                <AtomBadge
                  label="label"
                  transparent
                  size={atomBadgeSizes.LARGE}
                />
              </td>
            </tr>
          </table>
          <H4>Icons</H4>
          <UnorderedList>
            <ListItem>
              <Bold>Icons are optional</Bold> and can be placed either on the
              right or the left side, but never on both at the same time.
            </ListItem>
            <ListItem>
              Small badges with background won't display icons
            </ListItem>
          </UnorderedList>
          <table>
            <tr>
              <td>
                <Label>Small</Label>
              </td>
              <td>
                <AtomBadge
                  label="label"
                  icon={icon}
                  iconRight
                  size={atomBadgeSizes.SMALL}
                />
              </td>
              <td>
                <AtomBadge
                  label="label"
                  icon={icon}
                  iconLeft
                  size={atomBadgeSizes.SMALL}
                />
              </td>
              <td>
                <AtomBadge
                  label="label"
                  icon={icon}
                  iconRight
                  transparent
                  size={atomBadgeSizes.SMALL}
                />
              </td>
              <td>
                <AtomBadge
                  label="label"
                  icon={icon}
                  iconLeft
                  transparent
                  size={atomBadgeSizes.SMALL}
                />
              </td>
            </tr>
            <tr>
              <td>
                <Label>Medium</Label>
              </td>
              <td>
                <AtomBadge
                  label="label"
                  icon={icon}
                  iconRight
                  size={atomBadgeSizes.MEDIUM}
                />
              </td>
              <td>
                <AtomBadge
                  label="label"
                  icon={icon}
                  iconLeft
                  size={atomBadgeSizes.MEDIUM}
                />
              </td>
              <td>
                <AtomBadge
                  label="label"
                  icon={icon}
                  iconRight
                  transparent
                  size={atomBadgeSizes.MEDIUM}
                />
              </td>
              <td>
                <AtomBadge
                  label="label"
                  icon={icon}
                  iconLeft
                  transparent
                  size={atomBadgeSizes.MEDIUM}
                />
              </td>
            </tr>
            <tr>
              <td>
                <Label>Large</Label>
              </td>
              <td>
                <AtomBadge
                  label="label"
                  icon={icon}
                  iconRight
                  size={atomBadgeSizes.LARGE}
                />
              </td>
              <td>
                <AtomBadge
                  label="label"
                  icon={icon}
                  iconLeft
                  size={atomBadgeSizes.LARGE}
                />
              </td>
              <td>
                <AtomBadge
                  label="label"
                  icon={icon}
                  iconRight
                  transparent
                  size={atomBadgeSizes.LARGE}
                />
              </td>
              <td>
                <AtomBadge
                  label="label"
                  icon={icon}
                  iconLeft
                  transparent
                  size={atomBadgeSizes.LARGE}
                />
              </td>
            </tr>
          </table>
        </Article>
        <br />
        <Article mode="dark">
          <H2>Dark mode</H2>
          <div>
            <Paragraph>
              There is no <Code>negative</Code> Prop for this component.
            </Paragraph>
            <Paragraph>
              This is how the Badges look like over dark backgrounds.
            </Paragraph>
            <AtomBadge label="success" type={atomBadgeTypes.SUCCESS} />
            <AtomBadge label="error" type={atomBadgeTypes.ERROR} />
            <AtomBadge label="info" type={atomBadgeTypes.INFO} />
            <AtomBadge label="alert" type={atomBadgeTypes.ALERT} />
            <AtomBadge label="new" type={atomBadgeTypes.NEW} />
            <AtomBadge label="primary" type={atomBadgeTypes.PRIMARY} />
          </div>
          <Paragraph>___</Paragraph>
          <div>
            <AtomBadge
              label="success"
              type={atomBadgeTypes.SUCCESS}
              transparent
            />
            <AtomBadge label="error" type={atomBadgeTypes.ERROR} transparent />
            <AtomBadge label="info" type={atomBadgeTypes.INFO} transparent />
            <AtomBadge label="alert" type={atomBadgeTypes.ALERT} transparent />
            <AtomBadge label="new" type={atomBadgeTypes.NEW} transparent />
            <AtomBadge
              label="primary"
              type={atomBadgeTypes.PRIMARY}
              transparent
            />
          </div>
        </Article>
      </div>
    </div>
  )
}

export default Demo

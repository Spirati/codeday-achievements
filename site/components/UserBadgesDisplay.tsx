import { Grid } from '@codeday/topo/Atom/Box'
import Badge from '../interfaces/badge'
import BadgeComponent from './Badge'

export default function UserBadgesDisplay({ badges } : { badges: Badge[]}) {
    return (
        <Grid templateColumns="repeat(3, 1fr)">
            {
                badges.map(badge => (
                    <BadgeComponent key={badge.name} badge={badge} isSmall></BadgeComponent>
                ))
            }
        </Grid>
    )
}
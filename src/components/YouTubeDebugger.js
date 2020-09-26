// Code YouTubeDebugger Component Here
import React, { Component } from 'react'

export class YouTubeDebugger extends Component {
    constructor() {
        super()
        this.state = {
            errors: [],
            user: null,
            settings: {
                bitrate: 8,
                video: {
                    resolution: '1080p'
                }
            }
        }
    }

    handleBitrateClick = () => {
        this.setState({
            settings: {
                ...this.state.settings, //spread operator keeps others
                bitrate: 12
            }

        })
    }

    handleResolutionClick = () => {
        this.setState({
            settings: {
                ...this.state.settings,
                video: {
                    ...this.state.settings.video,
                    resolution: '720p'
                }
            }
        })
    }

    render() {
        return (
            <div>
                <button className="bitrate" onClick={this.handleBitrateClick}>bitrate</button>

                <button className="resolution" onClick={this.handleResolutionClick}>resolution</button>
            </div>
        )
    }
}

export default YouTubeDebugger

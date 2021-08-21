import msg from "msg.js";
import { ChangeEvent, Component } from "react";
import AttributesContract from "../../contracts/AttributesContract";
import ImageContract from "../../contracts/ImageContract";

export default class LoadImageForm extends Component<{}, {
    mateId: number,
    image?: string,
    attributes?: any,
}> {

    constructor(props: {}) {
        super(props);
        this.state = {
            mateId: -1,
        };
    }

    private handleMateIdChange = (event: ChangeEvent<HTMLInputElement>) => {
        this.setState({ mateId: parseInt(event.target.value, 10) });
    };

    private load = async () => {
        this.setState({ image: await ImageContract.image(this.state.mateId) });

        const attributes: any = {};
        const promises: Promise<void>[] = [];
        promises.push((async () => {
            attributes.level = `Level ${await AttributesContract.level(this.state.mateId)}`;
        })());
        promises.push((async () => {
            attributes.face = await AttributesContract.face(this.state.mateId);
        })());
        promises.push((async () => {
            attributes.faceDetailA = await AttributesContract.faceDetailA(this.state.mateId);
        })());
        promises.push((async () => {
            attributes.faceDetailB = await AttributesContract.faceDetailB(this.state.mateId);
        })());
        promises.push((async () => {
            attributes.neck = await AttributesContract.neck(this.state.mateId);
        })());
        promises.push((async () => {
            attributes.mouth = await AttributesContract.mouth(this.state.mateId);
        })());
        promises.push((async () => {
            attributes.eyes = await AttributesContract.eyes(this.state.mateId);
        })());
        promises.push((async () => {
            attributes.forehead = await AttributesContract.forehead(this.state.mateId);
        })());
        promises.push((async () => {
            attributes.headwear = await AttributesContract.headwear(this.state.mateId);
        })());
        promises.push((async () => {
            attributes.headwearDetail = await AttributesContract.headwearDetail(this.state.mateId);
        })());
        promises.push((async () => {
            attributes.ears = await AttributesContract.ears(this.state.mateId);
        })());
        promises.push((async () => {
            attributes.items = await AttributesContract.items(this.state.mateId);
        })());
        await Promise.all(promises);

        this.setState({ attributes });
    };

    public render() {
        let attributes;
        if (this.state.attributes !== undefined) {
            attributes = Object.values(this.state.attributes).filter((v) => v !== "").join(", ");
        }
        return <div className="load-image-form">
            <div className="form">
                <input className="mate-id" onChange={this.handleMateIdChange} />
                <span>
                    {msg({
                        ko: "번 메이트의 이미지와, 특성을",
                    })}
                </span>
                <a onClick={this.load}>{msg({
                    ko: "불러오기",
                })}</a>
            </div>
            <div className="info">
                {this.state.image !== undefined &&
                    <img src={this.state.image} />
                }
                {/*attributes !== undefined && <p>
                    {msg({
                        ko: "메이트 특성 : ",
                    })}
                    {attributes}
                </p>*/}
            </div>
        </div>;
    }
}
